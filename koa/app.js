const Koa = require('koa')
const cors = require('koa-cors')
const router = require('./router')
const app = new Koa();

/*
  解决跨域，或者通过设置Access-Control-Allow-Origin
*/ 
app.use(cors())
/*
  调用路由中间件
  router.routes():启动路由
  router.allowedMethods():允许任何请求
*/ 
app.use(router.routes(),router.allowedMethods())
//  处理路由 404
app.use(async (ctx,next) => {
  await next()
  if(parseInt(ctx.status) === 404){
    ctx.response.redirect('/404')
  }
})
app.listen(4000,() => {
  console.log('服务跑在http://localhost:4000')
})