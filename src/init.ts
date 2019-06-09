import fs from 'fs';
import path from 'path';

(function init() {
  fs.copyFileSync(
    path.resolve(__dirname, 'theme.js'),
    path.resolve(process.cwd(), 'theme.js'),
  );
})();
