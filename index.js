const fs = require('fs');
const path = require('path');

module.exports = {
  Q2R_JS: fs.readFileSync(path.join(__dirname, 'query-to-regex.js')).toString('utf8'),
};
