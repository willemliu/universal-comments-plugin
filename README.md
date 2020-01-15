# universal-comments-extension

## Installation

### Installation Chrome and Opera

1. In Chrome open the following URL and install the extension:

or

1. In Chrome address bar type: chrome://extensions
1. Enable developer mode
1. Drop the .crx file onto that page to install the extension.

## Usage

Open a web page and click the Extension icon to open the comments overlay.

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
