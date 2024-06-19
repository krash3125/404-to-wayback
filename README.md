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
   - Copy and paste the code from the `404-to-archive-redirecter.user.js` file into the script editor.
   - Save the script.

## Usage

Once installed, the script will automatically detect when a page returns a "404" or "Not Found" error. It will then redirect you to the corresponding page on the Internet Archive.

## Script Details

Here is the script you need to use:

```javascript
// ==UserScript==
// @name         404 to Archive Redirecter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirects 404 pages to the Internet Archive
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (document.title.includes("404") || document.body.textContent.includes("Not Found")) {
        let currentUrl = window.location.href;
        window.location.href = `https://web.archive.org/web/*/${currentUrl}`;
    }
})();


