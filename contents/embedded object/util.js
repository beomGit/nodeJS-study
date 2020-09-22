/**
 * util.deprecate는 해당 함수가 서비스 중단 되기 전에 공지해주는 함수이다.
 */

const util = require('util');
const crypto = require('crypto');

const dontuseme = util.deprecate((x, y) => {
    console.log(x + y);
}, '이 함수는 2020년 10월 부로 지원하지 않습니다.');    // 경고 문구

dontuseme(1, 2);

/* promise가 지원되지 않는 함수를 사용 가능하게 만들어준다.
 * 반대로 해주는 callbackify가 있다.
 */
const randomBytesPromise = util.promisify(crypto.randomBytes);
const pdkdf2Promnise = util.promisify(crypto.pdkdf2);



// callback hell 발생 -> async await 사용 권장
// randomBytes라는 함수가 promise를 지원해야만 바꿀 수 있다.
// 그렇지만 지원하지 않으므로 이때 util.promisify()를 사용한다.
crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt', salt);
    console.time('암호화');
    crypto.pbkdf2('jbpark', salt, 1396631, 64, 'sha512', (err, key) => {
        console.log('password', key.toString('base64'));
        console.timeEnd('암호화');
    });
});

randomBytesPromise(64)
    .then((buf) => {
        const salt = buf.toString('base64');
        console.log('salt', salt);
        console.time('암호화');
        return pdkdf2Promnise('jbpark', salt, 1396631, 64, 'sha512');
    })
    .then((key) => {
        console.log('password', key.toString('base64'));
    })
    .catch((err) => {
        console.error(err);
    });

    (async () => {
        const buf = await randomBytesPromise(64);
        const salt = buf.toString('base64');
        const key = await pdkdf2Promnise('jbpark', salt, 1396631, 64, 'sha512');
        console.log('password', key.toString('base64'));
    })();