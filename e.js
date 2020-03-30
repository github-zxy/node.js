const fs = require('fs')
const path = require('path')



fs.readFile(path.join(__dirname, 'a.js'), 'utf8', (err, doc) => {
    console.log(err)
    console.log(doc)
})

console.log('你好啊');
console.log('我很好');

