// 引入http模块
const http = require('http')
 // 创建服务
const server = http.createServer((req,res) => {
   // 发送响应数据
   res.writeHead(200,{
     // charset=utf-8 解决中文乱码
     'Content-type':'text/plain;charset=utf-8;'
   })
   res.write('hello world 再见！')
   res.end()
 })
 server.listen(8000,() => {
   console.log('服务启动了')
 })