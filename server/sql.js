const http = require('http')
const app = http.createServer()
const querystring= require('querystring')

app.on('request', (req, res) => {

    let postPath=""
    req.on('data', params => { 
        postPath=postPath+params
    })
    req.on('end', () => { 
        console.log(querystring.parse(postPath));
        
    })
    res.end('ok')
    
}
)

app.listen(8080)

console.log('地址:');
console.log('localhost:8080');
console.log('----------------');
console.log("服务器启动成功!!!");
