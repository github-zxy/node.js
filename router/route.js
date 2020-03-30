//引入http超文本传输协议
const http = require('http')
//创建服务器
const app = http.createServer()
//引入请求地址url
const url = require('url')

app.on('request', (req, res) => {

    //获取请求方式
    const method = req.method.toLowerCase()
    //获取请求地址
    const pathname = url.parse(req.url).pathname
    //引入中文显示
    res.writeHead(200, { 'content-type': 'text/html;charset=utf8' })

    if (method == 'get') {
        if (pathname == '/' || pathname == '/index') {
            res.end('首页欢迎你')
        } else if (pathname == '/list') {
            res.end('列表页欢迎你')
        } else {
            res.end('页面不存在')
        }
    } else if (method == 'post') {

    }
})

app.listen(8080)

console.log('地址:');
console.log('localhost:8080');
console.log('----------------');
console.log("服务器启动成功!!!");
