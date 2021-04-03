/*
  Node.js有很多内置事件，我们可以通过引入events模块
  并实例化EventEmitter类来绑定和监听事件

  events 模块只提供一个对象，events.EventEmitter，
  一般我们不直接使用，而是在对象中继承它。包括fs,net,http
  在内的只要是支持事件响应的核心模块都是eventEmitter的子类
*/

/* 
  eventEmitter = new events.EventEmitter();
  eventEmitter.on(eventName,callback)
  eventEmitter.emit(eventName[,参数1,参数2,参数3,...])
  eventEmitter.once(eventName,callback)
  eventEmitter.addListener(eventName,callback)
  eventEmitter.removeListener(eventName,callback)
  // 可选参数，不写移除所有；写移除指定事件名的所有
  eventEmitter.removeAllListener([eventName])
  // 默认添加10个监听器会输出警告信息  
  eventEmitter.setMaxListeners(n)
  // 返回指定事件的监听器数组
  eventEmitter.listeners(eventName)
  // 返回指定事件的监听器数
  eventEmitter.listenerCount(eventName)

  // 内置事件
  newListener / removeListener / error
*/

const events = require('events')

// 创建 EventEmitter 对象
const eventEmitter = new events.EventEmitter();
eventEmitter.on('newListener',(event) => {
  console.log('内置的事件',event)
})
eventEmitter.on('removeListener',(event) => {
  console.log('内置的事件',event)
})
eventEmitter.on('error',err => {
  // 如果没有这个出错了会停止程序
})

// 创建事件名并定义处理函数
eventEmitter.on('connection',(a,b,c,d,e) => {
  console.log('connection1',a,b,c,d,e)
  // 触发 data_received 事件
  eventEmitter.emit('data_received');
})
eventEmitter.on('connection',() => {
  console.log('connection2')
})
eventEmitter.on('data_received',() => {
  console.log('数据接收成功')
})
// 触发定义的函数
eventEmitter.emit('connection',1,2,3,4,5)
console.log(eventEmitter.listenerCount('connection'))