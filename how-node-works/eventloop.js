const fs = require('fs')

setTimeout(()=>{console.log('hello1')},0)                   
setImmediate(()=>{console.log('hello2')})

fs.readFile('./how-node-works/hello.txt',()=>{
    setTimeout(()=>{console.log('hello13')},3000)   
    setTimeout(()=>{console.log('hello14')},0)
    setImmediate(()=>{console.log('hello5')})   
    console.log('reading the file')

    console.log('-----------------------------------------------------')


    
})


console.log("hello from the top level code")