# 404 to Archive Redirecter

## Overview

404 to Archive Redirecter is a Greasemonkey/Tampermonkey script that automatically redirects you to the Internet Archive when it detects a "404" or "Not Found" page. This script ensures that you can still access the content you are looking for, even if the original page has been removed or is temporarily unavailable.

[Idea by Divide-By-0](https://example.com)


## Installation

1. **Install Tampermonkey or Greasemonkey**

   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Greasemonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

2. **Install the Script**

   - Create a new script in Tampermonkey/Greasemonkey.
   - Copy and paste the code from the `script.js` file into the script editor.
   - Save the script.

## Usage

Once installed, the script will automatically detect when a page returns a "404" or "Not Found" error. It will then redirect you to the corresponding page on the Internet Archive.

## Script Details

Here is the script you need to use:

```javascript
// ==UserScript==
// @name         404 to Archive Redirecter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirects 404 Not Found pages to the Internet Archive Wayback Machine
// @author       https://github.com/krash3125
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const notFoundTexts = ["404", "Not Found"];
    const bodyText = document.body.innerText;
    const is404 = notFoundTexts.some(text => bodyText.includes(text));

    if (is404) {
        const currentUrl = window.location.href;
        const archiveUrl = `https://web.archive.org/web/*/${currentUrl}`;
        window.location.replace(archiveUrl);
    }
})();
```


