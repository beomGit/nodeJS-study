/**
 * 내장 객체 중 path 객체에 대해서 학습한다.
 * 해당 객체는 자주 사용되므로 하나씩 외워서 학습하면 도움이 된다.
 */

const path = require('path');

console.log(path.sep);  //  '\\'
console.log(path.delimiter);  //  ';'
console.log(path.dirname(__filename));  // C:\BEOM\workspace_node\nodeJS-study\contents\embedded object
console.log(path.extname(__filename));  // .js
console.log(path.basename(__filename)); // path.js

/*  분리
  {
  root: 'C:\\',
  dir: 'C:\\BEOM\\workspace_node\\nodeJS-study\\contents\\embedded object',        
  base: 'path.js',
  ext: '.js',
  name: 'path'
  }
 */
console.log(path.parse(__filename));

/* 합치기
  C:\BEOM\workspace_node\nodeJS-study\contents\embedded object\path.js
*/
console.log(path.format({
        root: 'C:\\',
        dir: 'C:\\BEOM\\workspace_node\\nodeJS-study\\contents\\embedded object',        
        base: 'path.js',
        ext: '.js',
        name: 'path'
}));

/* 경로에 포함되는 '/' 또는 '\'에 대해서 정상적으로 작동하게 만들어준다. */
console.log(path.normalize('C://users\\\\jbpark\\ \path.js'));
console.log(path.isAbsolute('C:\\'))    // 절대경로인지 상대경로인지 true, false 리턴
console.log(path.relative('C:\\users\\jbpark\\path.js', 'C:\\'));   // 첫째 인자 경로에서 둘째 인자 경로로 가는 경로를 알려준다.
console.log(path.join(__dirname, '..', '..', '/users', '.', '/jbpark'));    // 절대 경로 무시하고 합침
console.log(path.resolve(__dirname, '..', '..', '/users', '.', '/jbpark'));    // 절대 경로 고려하고 합침 루트는 C:\(윈도)
