const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Remove mobile-warning div block
  const warningRegex = /[ \t]*<div id="mobile-warning">\s*<div class="mobile-warning-content">\s*<p>.*?<\/p>\s*<button onclick="closeMobileWarning\(\)">Okay<\/button>\s*<\/div>\s*<\/div>\s*/gs;
  content = content.replace(warningRegex, '');
  
  // Remove script tag
  const scriptRegex = /[ \t]*<script src="scripts\/mobileWarning\.js"><\/script>\s*/g;
  content = content.replace(scriptRegex, '');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
}
