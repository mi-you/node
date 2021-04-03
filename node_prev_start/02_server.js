// 引入http模块
const http = require('http')
 // 创建服务
const server = http.createServer((req,res) => {
   // 发送响应数据
   res.writeHead(200,{
     // charset=utf-8 解决中文乱码
     'Content-type':'text/html;'
   })
   
   res.write(`<head>
    <meta charset='utf-8' />
   </head>`)
   res.write(`'hello world 再见！'`)
   res.write(`<h1>hello world 再见！</h1>'`)
   res.end()
 })
 server.listen(8000,() => {
   console.log('服务启动了')
 })