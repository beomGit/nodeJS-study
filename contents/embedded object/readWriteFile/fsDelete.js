const fs = require('fs');

// 모든 메서드 뒤에 Sync를 붙이면 동기로 작동한다.
fs.readdir('./folder', (err, dir) => {
    if (err) {
        throw err;
    }
    console.log('폴더 내용 확인', dir);
    fs.unlink('./folder/newFile.js', (err) => {
        if (err) {
            throw err;
        }
        console.log('파일 삭제 성공');
        fs.rmdir('./folder', (err) => {
            if (err) {
                throw err;
            }
            console.log('폴더 삭제 성공');
        });
    });
});