# gramps-web-desktop (gwd)

The `gramps-web-desktop` package is a way for you to easily
use `gramps-web` with your local Gramps family trees.

**THIS IS ALPHA LEVEL SOFTWARE FOR EXPERIMENTAL USE ONLY**

## Installion

```shell
pip install gramps-web-desktop
```

## Setup

First, you must have created a temporary Gramps family tree for
testing.

That's it! Now you can run `gramps-web-desktop`:

## Running

At the console, enter the command:

```shell
gramps-web-desktop TREE USERNAME PASSWORD
```
or:

```shell
gwd TREE USERNAME PASSWORD
```

where:

* `TREE` - the the name of the test temporary Gramps family tree name
* `USERNAME` - this is meant to be a temporary username for this session
* `PASSWORD` - this is meant to be a temporary password for this session

Example:

```shell
gwd "Example" my_username _my_password
```

### Options

```shell
gramps-web-desktop
```

will show the list of family trees.

You can also use `gwd` instead of `gramps-web-desktop`.


## What does this do?

1. Looks through your local databases for a family tree named `TREE`
   (that you provided on the command line)
2. Uses the mediapath (from metadata) from that family tree to find images
3. Creates a temporary gramps-web USERNAME and PASSWORD with admin priviledges
4. Starts the `gramps-web-api` server with frontend already in place
5. Opens a webbrowser on appropriate address and port
6. Login using USERNAME and PASSWORD
7. You can create gramps-web indices inside the app.
8. When done, you should logout to avoid confusing gramps-web on next use
9. In terminal, press `CONTROL+C`
10. gramps-web-desktop will delete USERNAME from the user database

## FAQ

1. Does this use Docker?
  * No.
2. Does this expose my data?
  * This runs on a local port (5000 by default) and people on the local computer can see it
3. Can I send email via the app?
  * No, email services are not enabled
4. Will I see my family tree images?
  * Yes, if you have your mediapath set inside `gramps`
5. Will this leave a user account with admin access to my tree?
  * No, the temporary username is deleted when you press CONTROL+C
