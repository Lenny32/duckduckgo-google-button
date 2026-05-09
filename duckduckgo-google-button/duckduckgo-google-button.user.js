// ==UserScript==
// @name         DuckDuckGo to Google
// @namespace    https://github.com/Lenny32/duckduckgo-google-button
// @version      1.3
// @description  Add a Google button for direct redirection from DuckDuckGo search results
// @author       Lenny32
// @match        https://duckduckgo.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=duckduckgo.com
// @updateURL    https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/duckduckgo-google-button/duckduckgo-google-button.user.js
// @downloadURL  https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/duckduckgo-google-button/duckduckgo-google-button.user.js
// @supportURL   https://github.com/Lenny32/duckduckgo-google-button/issues
// @grant        none
// @license      MIT
// ==/UserScript==
(function () {
    'use strict';

    const BTN_ID = 'tm-google-search-btn';
    const STYLE_ID = 'tm-google-search-btn-style';

    if (!new URLSearchParams(location.search).has('q')) {
        return;
    }

    function injectStyles() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }

        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            #${BTN_ID} {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                margin-left: 8px;
                padding: 0 16px;
                border-radius: 999px;
                border: 1.5px solid #dadce0;
                cursor: pointer;
                font-size: 13px;
                font-family: Arial, sans-serif;
                font-weight: 500;
                color: #3c4043;
                background: #fff;
                box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                transition: background 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.05s ease;
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
        const input =
            document.querySelector('#search_form_input') ||
            document.querySelector('input[name="q"]');

        if (input && input.value.trim()) {
            return input.value.trim();
        }

        return new URLSearchParams(location.search).get('q')?.trim() || '';
    }

    function openGoogle() {
        const q = getQuery();
        if (!q) {
            return;
        }

        const url = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function createButton(height) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.id = BTN_ID;
        btn.textContent = 'Google';
        btn.style.height = `${height || 40}px`;
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            openGoogle();
        });
        return btn;
    }

    function addGoogleButton() {
        if (document.getElementById(BTN_ID)) {
            return;
        }

        const ddgButton =
            document.querySelector('#search_form button[type="submit"]') ||
            document.querySelector('form[action="/"] button[type="submit"]');

        if (!ddgButton) {
            return;
        }

        injectStyles();
        const btn = createButton(ddgButton.offsetHeight || 40);
        ddgButton.after(btn);
    }

    const observer = new MutationObserver(addGoogleButton);
    observer.observe(document.body, { childList: true, subtree: true });
    addGoogleButton();
})();