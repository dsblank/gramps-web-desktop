"""
gramps-web-desktop

Run your local gramps family trees in a browser.
"""

import os
import runpy
import sys
import tempfile
import argparse

import gramps
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
        "TREE",
        help="Name of Gramps family tree",
        type=str,
        nargs='?',
    )
    parser.add_argument(
        "USER",
        help="User name",
        type=str,
        nargs='?',
    )
    parser.add_argument(
        "PASSWORD",
        help="User's password",
        type=str,
        nargs='?',
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
        print("gramps-web-desktop %s" % __version__)
        sys.exit()


    if "GRAMPS_RESOURCES" not in os.environ:
        os.environ["GRAMPS_RESOURCES"] = os.path.split(
            os.path.split(gramps.__file__)[0]
        )[0]

    HERE = os.path.abspath(os.path.dirname(__file__))

    os.environ["GRAMPSWEB_STATIC_PATH"] = os.path.abspath(os.path.join(HERE, "frontend"))

    cli = CLIDbManager(DbState())
    databases = {key: value for key,value in cli.family_tree_list()}

    tree_name = args.TREE
    if tree_name not in databases:
        print("Use one of the following as first argument for tree:")
        for key in databases:
            print("    %r" % key)
        sys.exit()

    if args.USER is None or args.PASSWORD is None:
        print("Requires user and password: gramps-web-desktop TREE USER PASSWORD")
        sys.exit()
    
    path_to_database = os.path.join(databases[tree_name], "sqlite.db")
    path_to_index_database = os.path.join(databases[tree_name], "index.db")
    secret_key = "my-secret-key"

    db = open_database(tree_name)
    if db is None:
        print("Database %r is locked" % tree_name)
        sys.exit()

    media_base_dir = db.get_mediapath()
    if media_base_dir:
        media_base_dir = media_base_dir.format(**os.environ)
    else:
        media_base_dir = ""
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
    sys.argv = ["gramps_webapi.py", "--config", config_file.name, "user", "add", "--role", "5", args.USER, args.PASSWORD]
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
        sys.argv = ["gramps_webapi.py", "--config", config_file.name, "user", "delete", args.USER]
        runpy.run_module("gramps_webapi", run_name="__main__")
