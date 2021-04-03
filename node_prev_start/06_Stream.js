/*
  // node.js Stream有四种类型
    Readable:可读操作
    Writable:可写操作
    Duplex:可读可写操作
    Transform:操作被写入数据，然后读出结果
  // 所有Stream 对象都是EventEmitter的实例，常用事件有
    data - 数据可读触发
    end - 没有更多数据可读时触发
    error - 在接收和写入过程中发送错误时触发
    finish - 所有数据已被写入到底层系统时触发
*/
const fs = require('fs');

// 读取
let value = ''
const readerStream = fs.createReadStream('./read.txt');

// readerStream.setEncoding('utf-8') // 以什么编码读取

readerStream.on('data',data => {
  value += data
})
readerStream.on('end',() => {
  console.log('读完了:' + value)
})
readerStream.on('error',err => {
  console.log('出错了',err)
})

// 写入
let writeValue = '啦啦啦~ hello'
const writerStream = fs.createWriteStream('./write.txt')

writerStream.write(writeValue,'utf-8')
writerStream.end()

writerStream.on('finish',function(){
  console.log('写完了')
})
writerStream.on('error',err => {
  console.log('出错了',err)
})