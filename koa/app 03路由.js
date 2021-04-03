const Koa = require('koa')
// 引入路由
const Router = require('koa-router')

const app = new Koa();
const router = new Router()

router.get('/',async (ctx) => {
  ctx.set('Access-Control-Allow-Origin','*')
  ctx.body = '首页'
})
router.get('/list',async (ctx) => {
  ctx.set('Access-Control-Allow-Origin','*')
  ctx.body = '列表页'
})

/*
  router.routes():启动路由
  router.allowedMethods():允许任何请求
*/ 
app.use(router.routes(),router.allowedMethods())

app.listen(4000,() => {
  console.log('服务跑在http://localhost:4000')
})