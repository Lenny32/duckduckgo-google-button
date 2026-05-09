// ==UserScript==
// @name         Google Root
// @namespace    https://github.com/Lenny32/duckduckgo-google-button
// @version      1.1
// @description  Adds custom styling to Google search box and dropdown elements
// @author       Lenny32
// @match        https://www.google.com/search?q=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @updateURL    https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/dist/google-root/google-root.user.js
// @downloadURL  https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/dist/google-root/google-root.user.js
// @supportURL   https://github.com/Lenny32/duckduckgo-google-button/issues
// @grant        none
// @license      MIT
// ==/UserScript==
(function () {
    'use strict';
    function findAndModifyRootElement() {
        const searchBox = document.querySelector('textarea[name="q"]');
        if (!searchBox)
            return false;
        let current = searchBox;
        while (current && current !== document.body) {
            const styles = window.getComputedStyle(current);
            const hasBorder = styles.borderTopWidth !== '0px' ||
                styles.borderRightWidth !== '0px' ||
                styles.borderBottomWidth !== '0px' ||
                styles.borderLeftWidth !== '0px';
            const hasBorderRadius = styles.borderTopLeftRadius !== '0px' ||
                styles.borderTopRightRadius !== '0px' ||
                styles.borderBottomLeftRadius !== '0px' ||
                styles.borderBottomRightRadius !== '0px';
            if (hasBorder && hasBorderRadius) {
                current.style.boxShadow = '0 0 15px 3px rgba(255, 0, 0, 0.8)';
                return true;
            }
            current = current.parentElement;
        }
        return false;
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', findAndModifyRootElement);
    }
    else {
        findAndModifyRootElement();
    }
    const observer = new MutationObserver(() => {
        if (findAndModifyRootElement()) {
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
