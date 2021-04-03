const fs = require('fs')

// 异步读取
fs.readFile('text.txt',(err,data) => {
  if(err) return console.log(err);
  console.log('异步',data.toString())
})
// 同步读取
const data = fs.readFileSync('./text.txt');
console.log(data.toString())