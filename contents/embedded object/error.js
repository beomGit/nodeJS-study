/**
 * 노드는 싱글스레드 기반이기 때문에 하나의 시스템이 오류가 나면
 * 서버 전체가 죽는다. 그러므로 예외 처리를 잘 해주어야 한다.
 */
 
/** try - catch를 지양하고 에러가 안나게끔 코드를 작성하는 것에 집중 하는게 좋다.
 *  하지만 async/await처럼 어쩔 수 없이 try/catch를 써야 하는 경우도 있다.
 */ 
setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마');
    } catch (error) {
        console.error(error);
    }
 }, 1000);

// ----------------------------------------------------------------------
/**노드 내장 객체에서 나는 에러에 대해서는 작동이 중단되지 않고 계속 실행은 된다. */ 
const fs = require('fs');

setInterval(() => {
    fs.unlink('./asdfasdf.js', (err) => {
        if (err) {
            console.log('시작');
            console.log(err);
            console.log('끝');
        }
    });
}, 1000);

// ----------------------------------------------------------------------
/** uncatghtException 처리 하지 않은 예외에 대해서 한번에 처리해주는 함수
 *  모든 에러가 기록되기는 하나 근본적인 원인을 해결해주지는 않는다.
*/
process.on('uncaughtException', (err) => {
    console.error('예기치 못한 에러', err);
    // 서버를 복구하는 코드를 종종 넣기도 하나 콜백이 보장되지는 않는다.
});

setInterval(() => {
    throw new Error('서버를 고장내주마');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다');
}, 2000);

// ----------------------------------------------------------------------