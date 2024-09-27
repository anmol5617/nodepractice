const http=require('http')

  const server=http.createServer((req,res)=>{
    res.end('welcome to to the server ')
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server is listening on port 8000')
})