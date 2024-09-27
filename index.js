// const { isUtf8 } = require('buffer')
// const fs =require('fs')

// const readfile1=fs.readFileSync('./txt/hello.txt','Utf8')

// const writeinfile="i am writing this content in the other file let gooo"
// fs.writeFileSync('./txt/hello.txt',writeinfile)
// console.log('written')

// console.log(readfile1)

const http=require('http')

const server=http.createServer((req,res)=>{
    const path=req.url
    if(path==='/'){
        res.end('hei its me the server ')
    }else if(path==='/product'){
        res.end("yo bro i am the product")
    }else{
        res.end("hello from the server")
    }
    
})
server.listen(8000,'127.0.0.1',()=>{
    console.log("server is serving..................")
})