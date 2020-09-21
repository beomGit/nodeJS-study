/**
 * 내장 객체 중 os 객체에 대해서 학습한다.
 */

const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.type());
console.log(os.uptime());
console.log(os.hostname());
console.log(os.release());
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.freemem());  // 추가 사용 가능한 메모리
console.log(os.totalmem()); // 전체 사용 가능한 메모리
console.log(os.cpus());     // cpu 정보를 알려준다.