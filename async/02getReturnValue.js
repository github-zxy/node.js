function getMsg(){
    setTimeout(function () { 
        return {
            msg:'hello node.js'
        }
    },2000)
}

const msg = getMsg()
console.log(msg);
