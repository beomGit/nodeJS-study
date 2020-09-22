const fs = require('fs');
const zlib = require('zlib');

/** 파이프 연결 방식 1 */
const zlibStream = zlib.createGzip();
const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme5.txt');
// readStream.pipe(writeStream).pipe().pipe();
readStream.pipe(zlibStream).pipe(writeStream);

/** 파이프 연결 방식 2 */
// const readStream = fs.copyFile('./readme4.txt', './writeme4.txt', (err) => {
//     console.log(err);
// });