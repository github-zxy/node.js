const fs = require('fs')

fs.readFile('./b.js', 'utf8', (err, doc) => {
    console.log(err);
    console.log(doc);


}

)