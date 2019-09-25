(function () {
  /*
  query-to-regex

  Copyright (c) 2018-2019 Andrew Schaaf

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  */

  window.q2r = function (query) {
    var queryParts = query.trim().split(/[ ]+/);
    var regexParts = ['\\n([^\\t\\n]+)\\t([^\\n]*'];
    for (var len = queryParts.length, i = 0; i < len; i++) {
      regexParts.push(escapeForRegex(queryParts[i]) + '[^\\n]*');
    }
    regexParts.push('[^\\n]*)');
    return regexParts.join('');
  }

  window.q2r_search = function (lines, regexp) {
    var results = [];
    var match = null;
    do {
      match = regexp.exec(lines);
      if (match) {
        results.push([match[1], match[2]]);
      }
    } while (match);
    return results;
  }

  var escapeForRegex = function (text) {
    return text
              .replace(/\\/g, '\\\\')
              .replace(/[*]/g, '\\*')
              .replace(/[+]/g, '\\+')
              .replace(/[?]/g, '\\?')
              .replace(/[\[]/g, '\\[')
              .replace(/[\]]/g, '\\]')
              .replace(/[(]/g, '\\(')
              .replace(/[)]/g, '\\)');
  }
})();
