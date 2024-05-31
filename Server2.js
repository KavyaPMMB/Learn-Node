/*const array1=[{name:"Kavya",age:24},{name:"Arunima",age:22}]
const ob={name:"Keerthana",age:23}
const newarray=[...array1,ob]
console.log(newarray);*/

/*function Sample() {
    
    console.log("This is my Function");
    }
Sample();*/

/*const Sample=()=>{
    console.log("This is my Function");
}
Sample();*/

/*setInterval(() => {
    console.log("Hloo");
    
}, 8000);*/

/*setTimeout(() => {
    console.log("Welcome");
}, 6000);*/

/*const timerId = setInterval(() => {
    console.log('Timer fired');
  }, 5000);
  
  setTimeout(() => {
    clearInterval(timerId);
    console.log('Timer stopped');
  }, 5000);*/

  //----------------------------------------------------------------------------------------------

  /*fs.readFile('welcome.html','utf8',(err,data)=>{
        console.log(data);
})*/

/*fs.appendFile('welcome.html','Lets Start',(err)=>{
    if (err) throw err
})
fs.writeFile('new.html','Welcome '+'\n',(err)=>{
    if (err) throw err
})
fs.appendFile('new.html','Nice to meet You',(err)=>{
    if (err) throw err
})
fs.readFile('new.html','utf-8',(err,data)=>{
    console.log(data);
})
  /*fs.mkdir(path.join(__dirname,'newone'),{},(err)=>{
    if (err) throw err
  })*/

/*fs.rmdir(path.join(__dirname,'/newone'),{recursive:true},(err)=>{
    if (err) throw err
  })*/

/*const path=require('path')
  const fs=require('fs')
  const http=require('http')
  const server=http.createServer((req,res)=>{
    res.write("welcome")
    console.log("welcome");
    res.end()
  })
 server.listen(4000)*/

//----------------------------------------------------------------------------------------------------

/*const http=require('http')
const server=http.createServer((req,res)=>{
  res.write("WELCOME")
  console.log('welcome');
  console.log(req.url);
  res.end();
})
const Port=process.env.Port || 5000
server.listen(Port,console.log(`Server is running on ${Port}`))*/

//--------------------------------------------------------------------------------------------------------
/*const path=require('path')
const fs=require('fs')
const http=require('http')
const server=http.createServer((req,res)=>{
if(req.url==='/Services')
{
  fs.readFile(path.join(__dirname,'Home2','Services.html'),'utf-8',(err,data)=>{
    res.end(data)
  })
}
if(req.url==='/Contact')
{
  fs.readFile(path.join(__dirname,'Home2','Contact.html'),'utf-8',(err,data)=>{
    res.end(data)
  })
}
})
const Port=process.env.Port || 5000
server.listen(Port)*/

//--------------------------------------------------------------------------------------------------

/*const express=require('express')
const app=express()
app.get('/',(req,res)=>{
  res.send("<h1>Hloooo</h1>")
})
app.get('/*',(req,res)=>{
res.status(404)
res.send("NOT FOUND ERROR")
})
const Port=process.env.Port || 4000
app.listen(Port)*/

//---------------------------------------------------------------------------------------------------

/*const express=require('express')
const app=express()

app.use(express.static('Home'))

const Port=process.env.Port || 4000
app.listen(Port)*/

//---------------------------------------------------------------------------------------------------
/*const express=require('express')
const app=express()
app.get('/home',token2,validation2,start,(req,res)=>{
  res.send("Login")
  console.log("login");
})
function token2(req,res,next) {
  console.log("Token Creating..");
  next();
}
function validation2(req,res,next) {
  console.log("Token Approved");
  next();
  }
  function start(req,res,next) {
    console.log('lets start');
    next();
  }
const Port=process.env.Port || 4000
app.listen(Port)*/

//--------------------------------------------------------------------------------------------------------

/*const express = require("express");
const token2 = require("./Middleware/token2");
const validation2 = require("./Middleware/validation2");
const start = require("./Middleware/start");
const app = express();

const middlewarearray = [token2, validation2, start];
app.get("/home", middlewarearray, (req, res) => {
  res.send("Login");
  console.log("login");
});

const Port = process.env.Port || 4000;
app.listen(Port);*/

//----------------------------------------------------------------------------------------------


const express = require("express");
const app = express();






const Port = process.env.Port || 4000;
app.listen(Port);