#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove "use strict" lines that appear before // ==UserScript==
    const lines = content.split('\n');
    const userScriptIndex = lines.findIndex(line => line.trim() === '// ==UserScript==');
    
    if (userScriptIndex > 0) {
        // Remove any lines before // ==UserScript== that are "use strict" or empty
        const newLines = [];
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            // Skip "use strict" lines (with or without quotes) before the header
            if (i < userScriptIndex && /^"?use strict"?;?$/.test(line.trim())) {
                continue;
            }
            newLines.push(line);
        }
        content = newLines.join('\n');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${filePath}`);
    }
}

function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.user.js')) {
            fixFile(fullPath);
        }
    }
}

if (fs.existsSync(DIST_DIR)) {
    processDirectory(DIST_DIR);
    console.log('Header fix complete.');
} else {
    console.log('No dist directory found.');
}
