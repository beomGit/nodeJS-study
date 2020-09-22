/**
 * 단방향 암호화 hash방식으로 복호화되지 않는다.
 * sha512로 암호화해서 base64로 출력한다.
 */
const crypto = require('crypto');
console.log(crypto.createHash('sha512').update('비밀번호').digest('base64'));

