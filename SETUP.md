# GBS Mockup Project - Setup Instructions

## Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

## Quick Start

### Option 1: Development Mode
1. Extract the zip file to your desired location
2. Open terminal/command prompt in the project directory
3. Run: `npm install`
4. Run: `npm run dev`
5. Open http://localhost:5173 in your browser

### Option 2: Production Build (No Node.js Required)
1. Extract the zip file
2. Navigate to the `dist` folder
3. Double-click `index.html` to open in browser
4. Or use any local server (Live Server VSCode extension, Python server, etc.)

## Project Structure
```
├── src/                 # Source code
├── static/             # Static assets (favicon, etc.)
├── dist/               # Built production files
├── scripts/            # Build scripts
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## For Development
- The project uses Vite as the build tool
- React with TypeScript
- Tailwind CSS for styling
- All dependencies are listed in package.json

## Notes
- The build process creates optimized files in the `dist` folder
- Meritto compatibility script runs automatically during build
- All images and assets are bundled and optimized
- The project works offline once built

## Troubleshooting
- If dev server doesn't start, try `npm install` again
- For production, always use files from the `dist` folder
- Make sure all files are extracted completely (no file corruption)
