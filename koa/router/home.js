/*
  专门处理 /home 的路由
*/ 
const Router = require('koa-router')
const router = new Router()

/*
  由于 index.js里有设置 /hone
    router.use('/home',home.routes(),home.allowedMethods())
  所以下面的路由不需要再添加了即 
    / => /home
*/ 
router.get('/',async (ctx) => {
  // ctx.set('Access-Control-Allow-Origin','*')
  ctx.body = 'Home 页'
})

module.exports = router