import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '../dist');
const assetsPath = path.join(distPath, 'assets');

/**
 * Splits a file into N pieces.
 */
function splitFile(filePath, n, baseName, extension) {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return [];
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const partSize = Math.ceil(content.length / n);
    const files = [];

    for (let i = 0; i < n; i++) {
        const start = i * partSize;
        const end = (i + 1 === n) ? content.length : (i + 1) * partSize;
        const partContent = content.substring(start, end);
        const fileName = `${baseName}${i + 1}${extension}`;
        const newPath = path.join(assetsPath, fileName);
        fs.writeFileSync(newPath, partContent);
        files.push(`./assets/${fileName}`);
    }

    // Remove the original file
    fs.unlinkSync(filePath);
    return files;
}

console.log('Splitting files...');

// 1. Split JS (index.js -> 5 pieces)
const jsIndexAt = path.join(assetsPath, 'index.js');
const jsFiles = splitFile(jsIndexAt, 5, 'script', '.js');

// 2. Split CSS (style.css -> 5 pieces)
const cssStyleAt = path.join(assetsPath, 'style.css');
const cssFiles = splitFile(cssStyleAt, 5, 'style', '.css');

// 3. Update index.html
const htmlPath = path.join(distPath, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf-8');

// Remove existing module script tags and styles
html = html.replace(/<script type="module"[^>]*>.*?<\/script>/gs, '');
html = html.replace(/<script[^>]*src="[^"]*index\.js"[^>]*><\/script>/gs, '');
html = html.replace(/<link rel="stylesheet"[^>]*href="[^"]*style\.css"[^>]*>/gs, '');

// Insert new scripts in head or body
const newStyles = cssFiles.map(f => `<link rel="stylesheet" href="${f}">`).join('\n    ');
const newScripts = jsFiles.map(f => `<script src="${f}"></script>`).join('\n    ');

// Replace standard links with our split versions
html = html.replace('</head>', `${newStyles}\n  </head>`);
html = html.replace('</body>', `${newScripts}\n  </body>`);

// Also fix any dynamic module imports Vite might have left
html = html.replace(/<script[^>]*nomodule[^>]*>.*?<\/script>/gs, '');

fs.writeFileSync(htmlPath, html);

console.log('Fixed build for Meritto: 5 CSS and 5 JS files generated successfully.');
