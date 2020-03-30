//引入超文本传输协议
const http = require('http')
//创建服务器
const app = http.createServer()
//引入路径
const url = require('url')
//引入path
const path = require('path')
//引入系统文件
const fs = require('fs')
//第三方模块
const mime = require('mime')

//服务器的请求和响应
app.on('request', (req, res) => {

    //获取请求地址
    let pathname = url.parse(req.url).pathname
    //首页显示
    pathname = pathname == '/' ? '/default.html' : pathname
    //设置绝对路劲
    let readPath = path.join(__dirname, 'public' + pathname)
    //引入第三方模块
    let type = mime.getType(readPath)

    //服务器请求和响应
    fs.readFile(readPath, (err, result) => {
        if (err != null) {
            res.writeHead(404, { 'content-type': 'text/html;charset=utf8' })
            res.end('网页不存在')
            return;
        } else {
            res.writeHead(200, { 'content-type': type })
            res.end(result)
        }
    })
})
app.listen(8080)

console.log('地址:');
console.log('localhost:8080');
console.log('----------------');
console.log("服务器启动成功!!!");

