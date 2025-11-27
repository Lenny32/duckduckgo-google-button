# DuckDuckGo to Google Button

A userscript that adds a convenient Google search button to DuckDuckGo search results, allowing you to quickly search the same query on Google with one click.

## Quick Install

**Click to install:**
- **[DuckDuckGo to Google Button](https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/duckduckgo-google-button.user.js)** - Adds a Google button to DuckDuckGo search
- **[Google Root](https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/google-root.user.js)** - Adds custom styling to Google search elements

*Requires a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) to be installed first.*

---

## Features

- Adds a "Google" button next to the DuckDuckGo search button
- Opens Google search results in a new tab
- Automatically matches DuckDuckGo's button styling
- Works with all DuckDuckGo search variations

## Installation

### Automatic Installation (Recommended)

1. Install a userscript manager for your browser:
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge, Opera)
   - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

2. Click the install link below:
   - **[Install DuckDuckGo to Google Button](https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/duckduckgo-google-button.user.js)**

3. Your userscript manager will prompt you to install the script. Click "Install" or "Confirm"

4. The script will automatically update when new versions are released

### Manual Installation

1. Install a userscript manager (see step 1 above)

2. Open your userscript manager dashboard

3. Create a new script

4. Copy the contents of [`duckduckgo-google-button.user.js`](https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/duckduckgo-google-button.user.js) and paste it into the editor

5. Save the script

## Usage

1. Go to [DuckDuckGo](https://duckduckgo.com) and perform a search

2. You'll see a "Google" button next to the search button

3. Click the "Google" button to open the same search query in Google (opens in a new tab)

---

# Google Root

A companion userscript that adds custom styling to Google search elements for enhanced visual customization.

## Features

- Recursively finds and styles Google search box container elements
- Applies custom effects without relying on class or ID selectors
- Automatically handles dynamic content updates
- Works with Google's autocomplete dropdown

## Installation

### Automatic Installation (Recommended)

1. Make sure you have a userscript manager installed (see above)

2. Click the install link below:
   - **[Install Google Root](https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/google-root.user.js)**

3. Your userscript manager will prompt you to install the script. Click "Install" or "Confirm"

4. The script will automatically update when new versions are released

### Manual Installation

1. Install a userscript manager (see DuckDuckGo to Google Button installation above)

2. Open your userscript manager dashboard

3. Create a new script

4. Copy the contents of [`google-root.user.js`](https://raw.githubusercontent.com/Lenny32/duckduckgo-google-button/main/google-root.user.js) and paste it into the editor

5. Save the script

## Usage

1. The script runs automatically on Google search pages

2. Custom styling is applied to the search box and related elements

3. No user interaction required - it works in the background

---

## Compatibility

- Works on all major browsers with a userscript manager installed
- Tested on:
  - Chrome + Tampermonkey
  - Firefox + Tampermonkey/Greasemonkey
  - Edge + Tampermonkey

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contributing

Issues and pull requests are welcome! Please feel free to contribute.

## Support

If you encounter any issues, please [open an issue](https://github.com/Lenny32/duckduckgo-google-button/issues) on GitHub.
