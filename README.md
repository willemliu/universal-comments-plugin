# universal-comments-extension

Take only memories, leave only comments.

## Table of contents

-   [Installation](#installation)
    -   [FireFox](#firefox)
    -   [Chrome](#chrome)
        -   [Manually](#manually)
-   [Usage](#usage)
    -   [Extension options](#extension-options)
    -   [Post comment](#post-comment)
        -   [Reply](#reply)
    -   [Comments Admin](#comment-admin)
    -   [Circle Admin](#circle-admin)
        -   [What are circles?](#what-are-circles)
-   [Disable on your website](#disable-on-your-website)
-   [Development](#development)
    -   [Prerequisites](#prerequisites)
    -   [Getting started](#getting-started)
-   [Privacy policy](privacy.txt)

## Installation

### FireFox

-   FireFox (Desktop & Android): https://addons.mozilla.org/nl/firefox/addon/universal-comments/

### Chrome

-   Chrome: TBA

#### Manually

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

#### What are circles?

Circles are enclosed areas in which only the invited are able to post and read comments.
You can create circles as you please. After which you can invite other people to join your circle.
Maybe you want to have separate circles for your family, friends and colleagues.

Your comments intended for colleagues may be more formal or work-related and irrelevant for other people.
Same goes for your comments in a circle of friends.

With circles you can manage your circles as you please.

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
