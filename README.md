## Code for David Casillas Rivero website

### Notes

The website is hosted on github pages, on my user account. The plugin gh-pages is used to publish the build site, but the plugin must be configured to deploy to a different repo than the one that holds the code. gh-pages auto-generates a npm-script to automate this task, but the script must be modified.

Original

    "deploy": "gatsby build && gh-pages -d public -r https://github.com/DavidCasillasRivero/DavidCasillasRivero.github.io -b master"

Edited: added the `-r` option

    "deploy": "gatsby build && gh-pages -d public -r https://github.com/DavidCasillasRivero/DavidCasillasRivero.github.io -b master"
