
/**
 * 기존 방식(url.parse)은 호스트가 없을 때도 쓸 수 있습니다.
 * WHATWG방식(url.URL)은 search 처리가 편리합니다.
 */
const url = require('url');
const URL = url.URL;
const myURL = new URL('http://www.naver.com');

console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('---------------------------------');

const parseUrl = url.parse('http://www.naver.com');
console.log('url.parse():', parseUrl);