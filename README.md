# Copy Rich Link

Browser extension to copy the page title and URL as rich text.

Useful for pasting links to Slack, Google Docs, etc.

![](images/screenshot-copied.png)

![](images/screenshot-pasted.png)

## Usage

### Install

Install from [Chrome Web Store](https://chrome.google.com/webstore/detail/copy-rich-link/hikiamlgpdcabppakpmemaofmkgknpea).

### Copy

Click the extension icon or execute the keyboard shortcut to copy the link to the page as rich text.

### Keyboard shortcut

The default keyboard shortcut is <kbd>Ctrl + Shift + L</kbd>, and <kbd>Command + Shift + L</kbd> on Mac.
This can be changed from the browser's extension settings.

### Plain text fallback

As a fallback, we also copy in plain text format in the form `"{title}" {url}`,
so that if you paste where rich text is not available or paste explicitly as plain text (<kbd>Ctrl + Shift + V</kbd> on Windows), this plain text format will be pasted.
