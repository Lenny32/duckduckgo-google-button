// ==UserScript==
// @name         DuckDuckGo to Google
// @namespace    https://github.com/Lenny32/duckduckgo-google-button
// @version      1.3
// @description  Add a Google button for direct redirection from DuckDuckGo search results
// @author       Lenny32
// @match        https://duckduckgo.com/?q=*
// @match        https://duckduckgo.com/?t=*&q=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=duckduckgo.com
// @updateURL    https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/duckduckgo-google-button.user.js
// @downloadURL  https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/duckduckgo-google-button.user.js
// @supportURL   https://github.com/Lenny32/duckduckgo-google-button/issues
// @grant        none
// @license      MIT
// ==/UserScript==
(function () {
    'use strict';

    const BTN_ID = 'tm-google-search-btn';

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #${BTN_ID} {
                display: inline-flex;
                align-items: center;
                margin-left: 8px;
                padding: 0 16px;
                border-radius: 999px;
                border: 1.5px solid #dadce0;
                cursor: pointer;
                font-size: 13px;
                font-family: arial, sans-serif;
                font-weight: 500;
                color: #3c4043;
                background: #fff;
                box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                transition: background 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease, color 0.15s ease;
                white-space: nowrap;
                user-select: none;
                letter-spacing: 0.01em;
            }

            #${BTN_ID}:hover {
                background: #f0f4ff;
                border-color: #4285f4;
                color: #4285f4;
                box-shadow: 0 2px 8px rgba(66,133,244,0.18);
            }

            #${BTN_ID}:active {
                background: #e3ecfd;
                border-color: #3367d6;
                color: #3367d6;
                box-shadow: 0 1px 3px rgba(66,133,244,0.12);
                transform: scale(0.97);
            }
        `;
        document.head.appendChild(style);
    }

    function getQuery() {
        const input = document.querySelector('#search_form_input');
        if (input) {
            return input.value.trim();
        }
        return '';
    }

    function openGoogle() {
        const q = getQuery();
        if (q) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(q)}`, '_blank');
        }
    }

    function createButton(height) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.id = BTN_ID;
        btn.textContent = 'Google';
        btn.style.height = `${height}px`;
        btn.addEventListener('click', openGoogle);
        return btn;
    }

    function addGoogleButton() {
        if (document.getElementById(BTN_ID)) {
            return;
        }

        const ddgButton = document.querySelector('#search_form button[type="submit"]');
        if (!ddgButton) {
            return;
        }

        injectStyles();
        const btn = createButton(ddgButton.offsetHeight);
        ddgButton.after(btn);
        observer.disconnect();
    }

    const observer = new MutationObserver(addGoogleButton);
    observer.observe(document.body, { childList: true, subtree: true });
    addGoogleButton();
})();