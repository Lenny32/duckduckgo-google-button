// ==UserScript==
// @name         DuckduckGo to Google
// @namespace    https://github.com/Lenny32/duckduckgo-google-button
// @version      1.2
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

    function addGoogleButton() {
        if (document.querySelector('#tm-google-search-btn')) return;

        const form  = document.querySelector('#search_form');
        const input = document.querySelector('#search_form_input');
        if (!form || !input) return;

        // Find the main DDG search submit button
        const ddgButton = form.querySelector('button[type="submit"]');
        if (!ddgButton) return;

        // Create the Google button
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.id = 'tm-google-search-btn';
        btn.textContent = 'Google';
        btn.style.marginLeft = '8px';
        btn.style.padding = '0 12px';
        btn.style.borderRadius = '999px';
        btn.style.border = '1px solid #ccc';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '13px';
        btn.style.height = ddgButton.offsetHeight + 'px';
        btn.style.background = 'white';

        btn.addEventListener('click', () => {
            const q = input.value.trim();
            if (!q) return;
            window.open('https://www.google.com/search?q=' + encodeURIComponent(q), '_blank');
        });

        // Insert next to original DDG search button
        ddgButton.parentNode.insertBefore(btn, ddgButton.nextSibling);
    }

    const observer = new MutationObserver(addGoogleButton);
    observer.observe(document.body, { childList: true, subtree: true });

    addGoogleButton();
})();
