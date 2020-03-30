//引入http超文本传输协议
const http = require('http')
//创建服务器
const app = http.createServer()
//引入请求地址url
const url = require('url')
//引入系统文件
const fs = require('fs')
//引入path
const path = require('path')
//引入mime
const mime =require('mime')

app.on('request', (req, res) => {

    //获取请求地址
    let pathname = url.parse(req.url).pathname
    //首页显示
    pathname= pathname == '/'?'/default.html':pathname
    //设置绝对路径
    let realPath = path.join(__dirname, 'public' + pathname)
    //设置第三方模块查看请求设置
    let type = mime.getType(realPath)
    


    fs.readFile(realPath, (err, result) => {
        if (err != null) {
            res.writeHead(404, { 'content-type': 'text/html;charset=utf8' })
            res.end('文件读取失败')
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

