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

