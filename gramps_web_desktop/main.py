"""
gramps-web-desktop

Run your local gramps family trees in a browser.
"""

import os
import runpy
import sys
import tempfile
import argparse

from gramps.cli.clidbman import CLIDbManager
from gramps.gen.dbstate import DbState
from gramps.gen.db.utils import open_database

from ._version import __version__

CONFIG_TEMPLATE = """
TREE="{tree_name}"
SECRET_KEY="{secret_key}"
USER_DB_URI="sqlite:///{path_to_database}"
MEDIA_BASE_DIR="{media_base_dir}"
SEARCH_INDEX_DB_URI="sqlite:///{path_to_index_database}"
"""

def main(raw_args=sys.argv[1:]):
    parser = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument(
        "tree",
        help="Name of Gramps family tree",
        type=str,
    )
    parser.add_argument(
        "user",
        help="User name",
        type=str,
    )
    parser.add_argument(
        "password",
        help="User's password",
        type=str,
    )
    parser.add_argument(
        "--version",
        help="Show version of gramps-web-desktop",
        action="store_const",
        const=True,
        default=False,
    )

    args, rest = parser.parse_known_args(raw_args)

    if args.version:
        print(__version__)
        sys.exit()


    if "GRAMPS_RESOURCES" not in os.environ:
        raise Exception("GRAMPS_RESOURCES needs to be set in environment")

    HERE = os.path.abspath(os.path.dirname(__file__))

    os.environ["GRAMPSWEB_STATIC_PATH"] = os.path.abspath(os.path.join(HERE, "frontend"))

    cli = CLIDbManager(DbState())
    databases = {key: value for key,value in cli.family_tree_list()}

    tree_name = args.tree
    if tree_name not in databases:
        raise Exception("Unknown tree: %r" % tree_name)
    
    path_to_database = os.path.join(databases[tree_name], "sqlite.db")
    path_to_index_database = os.path.join(databases[tree_name], "index.db")
    secret_key = "my-secret-key"

    db = open_database(tree_name)
    media_base_dir = db.get_mediapath().format(**os.environ)
    db.close()

    config_contents = CONFIG_TEMPLATE.format(
        tree_name=tree_name,
        secret_key=secret_key,
        path_to_database=path_to_database,
        media_base_dir=media_base_dir,
        path_to_index_database=path_to_index_database,
    )
    with tempfile.NamedTemporaryFile("w", delete=False, suffix=".cfg", prefix="gramps-web-") as config_file:
        config_file.write(config_contents)

    print("GRAMPS_RESOURCES:", os.environ["GRAMPS_RESOURCES"])
    print("GRAMPSWEB_STATIC_PATH:", os.environ["GRAMPSWEB_STATIC_PATH"])
    print("MEDIA_BASE_DIR:", media_base_dir)
    print()
    print("Make sure you logout when finished")

    # First, make a user/password with admin role
    user_exists = False
    sys.argv = ["gramps_webapi.py", "--config", config_file.name, "user", "add", "--role", "5", args.user, args.password]
    try:
        runpy.run_module("gramps_webapi", run_name="__main__")
    except ValueError as exc:
        if exc.args[0] == "User already exists":
            user_exists = True
        else:
            raise

    # Next, run gramps-web-api:

    sys.argv = [
        "gramps_webapi.py",
        "--config", config_file.name,
        "run",
        "--open-browser", "tab",
        "--use-wsgi",
        "--debug-level", "warning"
    ]
    runpy.run_module("gramps_webapi", run_name="__main__")

    # Finally, delete user/password with admin role

    if not user_exists:
        sys.argv = ["gramps_webapi.py", "--config", config_file.name, "user", "delete", args.user]
        runpy.run_module("gramps_webapi", run_name="__main__")
