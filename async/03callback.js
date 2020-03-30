function getData(callback) {
    callback('123')
}
//初始化函数
getData(function (n) {
    console.log('callback函数被调用了');
    console.log(n)
}
)
//回调函数
getData((n) => {
    console.log('callback函数被调用了');
    console.log(n)
}
)
