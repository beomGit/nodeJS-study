/**
 * crypto 양방향 암호화
 * 특정 key 값을 가지고 값을 암호화 또는 복호화 한다.
 */

const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
let result = cipher.update('jbpark', 'utf8', 'base64');
result += cipher.final('base64');

console.log('암호', result);

const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');

console.log('평문', result2);