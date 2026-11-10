// ==UserScript==
// @name         Reddit to Redlib Redirect
// @namespace    https://github.com/shmup/redirect-userscripts
// @version      1.0
// @author       42willow
// @match        https://www.reddit.com/*
// @match        https://reddit.com/*
// @match        https://old.reddit.com/*
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const newURL = new URL(window.location.href);
    newURL.hostname = 'safereddit.com';
    window.location.replace(newURL.toString());
})();
