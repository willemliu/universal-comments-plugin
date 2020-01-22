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

### Extension options

The following extension options can be set:

![Extension options](https://github.com/willemliu/universal-comments-plugin/blob/master/screenshots/options.jpg?raw=true "Extension options")

-   `Enable`: uncheck to disable the plugin (default: checked)
-   `Hide button overlay`: check to hide the `Universal Comments` button overlay. You can still toggle the comments overlay clicking the Extension icon. (default: unchecked)
-   `Overlay height (%)`: Comments overlay height as a percentage of the viewport (default: 50)

### Post comment

Once you're logged in you can post a comment using the form.

![Comment form](https://github.com/willemliu/universal-comments-plugin/blob/master/screenshots/CommentForm.jpg?raw=true "Comment form")

#### Reply

You can directly reply to an existing comment by clicing on the 📥-icon at the bottom right corner of a comment.

### Comments Admin

You can open the Comments Admin by clicking the ⚙️-icon next to the `Comments` label in the comments overlay.

![Comments Admin](https://github.com/willemliu/universal-comments-plugin/blob/master/screenshots/CommentsSettingsIcon.jpg?raw=true "Comments Admin")

When you are on the Comments Admin page you can login with the account with which you've posted comments.
Then all your comments are visible there and you have the option to remove the comments.

### Circle Admin

You can open the Circle Admin by clicking the ⚙️-icon next to the `Circle` select-box in the comments overlay.

![Circle Admin](https://github.com/willemliu/universal-comments-plugin/blob/master/screenshots/CircleSettingsIcon.jpg?raw=true "Circle Admin")

When you are on the Circle Admin page you can login with the account with which you post comments.
You can create, delete, leave and join circles here.

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
