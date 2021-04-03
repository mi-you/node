/*
  专门处理 /list 的路由
*/ 
const Router = require('koa-router')
const router = new Router()

/*
  由于 index.js里有设置 /list
    router.use('/list',list.routes(),list.allowedMethods())
  所以下面的路由不需要再添加了即 
    /1 => /list/1
*/ 
router.get('/',async (ctx) => {
  ctx.set('Access-Control-Allow-Origin','*')
  ctx.body = '列表页'
})
router.get('/1',async (ctx) => {
  ctx.set('Access-Control-Allow-Origin','*')
  ctx.body = '列表页1'
})
router.get('/2',async (ctx) => {
  ctx.set('Access-Control-Allow-Origin','*')
  ctx.body = '列表页2'
})

module.exports = router