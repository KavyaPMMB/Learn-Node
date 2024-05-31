const http=require('http')
http.createServer((req,res)=>{
    res.write('This is Node js')
    console.log(req.url);
    res.end();
}).listen(5000,console.log("server is running"))