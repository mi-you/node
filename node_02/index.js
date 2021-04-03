const fs = require('fs')

fs.writeFile('./log.test','hello',(err,data) => {
  if(err){

  }else{
    console.log('文件创建成功')
  }
})