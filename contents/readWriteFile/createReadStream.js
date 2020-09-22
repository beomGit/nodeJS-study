const fs = require('fs');

// 스트리밍 방식으로 16바이트 버퍼를 채우면 읽고, 16바이트 버퍼를 채우면 읽는 방식.
// 버퍼들이 이어지는게 스트리밍
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16});
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error', err);
});