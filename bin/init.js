#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

function init() {
  fs.copyFileSync(
    path.resolve(__dirname, 'src', 'theme.ts'),
    path.resolve(process.cwd(), 'theme.js'),
  );
}

init();
