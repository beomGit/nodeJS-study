/**
 * salt를 추가해 비밀번호를 복잡하게 만들어주는 메서드
 * (비밀번호 충돌을 막기 위해)
 * 실무에서는 bcrypt, scrpyt를 자주 사용한다.
 * sha512 방식과 sha512에 salt를 추가하는 방식이 있다.
 */
const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt', salt);
    console.time('암호화');
    crypto.pbkdf2('jbpark', salt, 1396631, 64, 'sha512', (err, key) => {
        console.log('password', key.toString('base64'));
        console.timeEnd('암호화');
    });
});

crypto.createHash('sha512').update('비밀번호').digest('base64');