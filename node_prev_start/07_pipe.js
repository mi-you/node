/*
  pipe : stream 管道流
  pipe().pipe() 链式流
*/
const fs = require('fs')
const zlib = require('zlib')

// 读取
const readerStream = fs.createReadStream('./read.txt');
// 写入
const writerStream = fs.createWriteStream('./write.txt')

// 从read.txt 读取，写入到 write.txt（write.txt如果有内容会被清除）
readerStream.pipe(writerStream)

// 压缩
fs.createReadStream('./read.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./zlib.txt.gz'))

// 解压
fs.createReadStream('./zlib.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('./write.txt'))