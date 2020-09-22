/**
 * 논 블로킹과 블로킹
 * 비동기와 동기
 */

 /** 비동기 방식 */
const fs = require('fs');

console.log('시작');
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');