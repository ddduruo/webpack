const path = require('path')
module.exports = {
  mode: "development",
  entry:'./src/index.js',
  output:{
    path: path.resolve(__dirname,'dist'), //动态获取路径
    filename: 'bundle.js'
  },
}