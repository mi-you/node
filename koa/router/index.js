// 引入路由
const Router = require('koa-router')
// 引入拆分出去的路由
const home = require('./home')
const list = require('./list')
const r404 = require('./r404')
// 创建路由
const router = new Router()

/*
  路由的重定向
*/ 
router.redirect('/','/home')
/*
  调用路由中间件
  '/home'：只要是这个路由就去调用这个中间件
  router.routes():启动路由
  router.allowedMethods():允许任何请求
*/ 
router.use('/home',home.routes(),home.allowedMethods())
router.use('/list',list.routes(),list.allowedMethods())
router.use('/404',r404.routes(),r404.allowedMethods())


module.exports = router