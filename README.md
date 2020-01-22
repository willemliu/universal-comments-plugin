# universal-comments-extension

Take only memories, leave only comments.

## Installation

### Installation Chrome and FireFox

-   FireFox: https://addons.mozilla.org/nl/firefox/addon/universal-comments/

-   Chrome: TBA

or manually

1. In Chrome address bar type: chrome://extensions
1. Enable developer mode
1. `Load unpacked` and select the `/universal-comments` folder

## Usage

Open a web page and click the Extension icon to open the comments overlay.

## Disable on your website

You can easily disable the plugin on any page of your website by adding the following meta tag in your page head:

`<meta name="uc:disabled" content="true"/>`

## Development

### Prerequisites

1. NodeJS
1. NPM

### Getting started

1. Run `npm i` to install dependencies
1. Run `npm run webpack` to build the plugin
1. Run `npm run release:...` to copy the correct manifest to the assets folder
    1. For Chrome run: `npm run release:chrome`
    1. For FireFox run: `npm run release:firefox`
