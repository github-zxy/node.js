const http = require('http')
const url = require('url')
const app = http.createServer()


app.on('request', (req, res) => {


    console.log(req.url);
    console.log(url.parse(req.url, true).query);

    const { pathname, query } = url.parse(req.url, true)
    console.log(query.name);
    console.log(query.age);



    res.writeHead(200, { 'content-type': 'text/html;charset=utf8' })

    if (pathname == '/index' || pathname == '/') {
        res.end('<h1>欢迎来到首页</h1>');
    } else if (pathname == '/list') {
        res.end('<h2>欢迎来到list页</h2>');
    } else {
        res.end('<h3>欢迎来到未定义页</h3>')
    }



    if (req.method == 'POST') {
        res.end('post')
    } else if (req.method == 'GET') {
        res.end('get')
    }
}
)

app.listen(8080)

console.log('地址:');
console.log('localhost:8080');
console.log('----------------');
console.log("服务器启动成功!!!");
