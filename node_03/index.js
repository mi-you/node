/*
  node 环境都可以访问process
  之后用node执行index.js 可以传参了
  node index.js argv1 argv2 argv3
*/
console.log(process.argv.slice(0))
console.log(process.argv.slice(2))