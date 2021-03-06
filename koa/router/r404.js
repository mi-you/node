/*
  专门处理 404 的路由
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
  ctx.body = '404 Not Found'
})

module.exports = router