//  整个koa项目的入口文件
const Koa = require('koa')

// 声明一个实例
const app = new Koa();

/*
  express的调用中间件是按顺序执行的；
  要学习koa就要了解洋葱模型，koa的中间件可以随时进入下一个中间件
*/ 
app.use(async (ctx,next) => {
  console.log(1)
  await next()
  console.log(1)
})
app.use(async (ctx,next) => {
  console.log(2)
  await next()
  console.log(2)
})
app.use(async (ctx,next) => {
  console.log(3)
})

// 监听
app.listen(4000,() => {
  console.log('服务跑在http://localhost:4000')
})