# -*- coding: utf-8 -*-
import io
import os

import setuptools

HERE = os.path.abspath(os.path.dirname(__file__))


def get_version(file, name="__version__"):
    """
    Get the version of the package from the given file by
    executing it and extracting the given `name`.
    """
    path = os.path.realpath(file)
    version_ns = {}
    with io.open(path, encoding="utf8") as f:
        exec(f.read(), {}, version_ns)
    return version_ns[name]


__version__ = get_version(os.path.join(HERE, "gramps_web_desktop/_version.py"))

with io.open(os.path.join(HERE, "README.md"), encoding="utf8") as fh:
    long_description = fh.read()

setup_args = dict(
    name="gramps-web-desktop",
    version=__version__,
    url="https://github.com/dsblank/gramps-web-desktop",
    author="",
    description="",
    long_description=long_description,
    long_description_content_type="text/markdown",
    install_requires=[
        "gramps>=5.2.0",
        "gramps-webapi[ai]>=2.6.0",
    ],
    packages=[
        "gramps_web_desktop",
    ],
    include_package_data=True,
    entry_points={
        "console_scripts": [
            "gramps-web-desktop = gramps_web_desktop:main",
            "gwd = gramps_web_desktop:main",
        ]
    },
    python_requires=">=3.7",
    license="AGPL-3.0 license",
    platforms="Linux, Mac OS X, Windows",
)

if __name__ == "__main__":
    setuptools.setup(**setup_args)
