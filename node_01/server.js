// 内置模块
const http = require('http')

http.get('http://www.baidu.com',res => {
  let str = '';
  res.on('data',chunk => {
    str += chunk
  })
  res.on('end',() => {
    console.log(str)
  })
})