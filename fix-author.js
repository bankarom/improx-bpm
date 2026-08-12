const fs = require('fs');
let c = fs.readFileSync('lib/wordpress.ts', 'utf8');
c = c.replace(/author: '[^']+'/g, "author: 'Improx Team'");
c = c.replace(/\\\\n/g, '\n');
fs.writeFileSync('lib/wordpress.ts', c);
console.log('Fixed data');
