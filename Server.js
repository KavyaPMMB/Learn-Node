/*//console.log("hloo welcome")
const a=10,b=20;
//console.log(a+b)
const array=['a','b','c']
//console.log(array)
const d=10;
const array2=[...array,d];
//console.log(array2)
const sample=()=>{

   console.log('hloo')
}*/
//sample()

//---------------------------------------------------------------------------------------------

//  const path = require('path');

//  console.log(path);
// console.log(__filename);
// console.log(__dirname);
//  console.log(path.basename(__filename));
//  console.log(path.extname(__filename));
// console.log(path.dirname(__filename));
//  console.log(path.parse(__filename));
//   console.log(path.join(__dirname, "abc", "Server.js")); //join path to another path 
// console.log(path.join(__filename, "newpath", "Server.js"));

//------------------------------------------------------------------------------------------------------

    // const fs=require('fs')//fileSystem
    //  console.log(fs)

//  fs.writeFile('Hello.html',"welcome",(err)=>{
//    if (err) throw err
//  })

//  fs.writeFile('Hello.html','hi',(err)=>{
//      if (err) throw err
//      })

// fs.writeFile('Sample.html','the game',(err)=>{
//     if (err) throw err
// })

// fs.appendFile('Hello.html','hiiii',(err)=>{
//      if (err) throw err
//  })

// fs.appendFile('Sample2.html','helloo',(err)=>{
//     if (err) throw err
// })

// fs.appendFile('Sample2.html','hiiiiii',(err)=>{
//     if (err) throw err
// })

// fs.readFile('Hello.html','utf8',(err,data)=>{
//     console.log(data);
// })

//-----------------------------------------------------------------------------

// const fs=require('fs')
// const path=require('path')

// fs.mkdir("myfolder5",{},(err)=>{
//     if (err) throw err
// })

// fs.rmdir("myfolder4",{recursive:true},(err)=>{
//   if (err) throw err
// })

// fs.rmdir(path.join(__dirname,"/myfolder"),{recursive:true},(err)=>{
//     if (err) throw err
// })

// fs.rmdir(path.join(__dirname,"/newone/new"),{recursive:true},(err)=>{
//     if (err) throw err
// })

/*fs.rmdir(path.join(__dirname,"/newone"),{recursive:true},(err)=>{
    if (err) throw err
})*/

//---------------------------------------------------------------------------------------------------

// const http=require("http")

// http.createServer((req,res)=>{
//     res.write("this is running")
//       res.end();
// }).listen(4000,console.log("server is running"))

//-------------------------------------------------------------------------------------------------------------


// const http=require('http')

// const server=http.createServer((req,res)=>{
//     res.write("server is running" +"\n")
//     res.write(req.url)
//     res.end()

// })

// Port=4000;
// server.listen(Port,console.log(`Server is running on  ${Port}`))

//-----------------------------------------------------------------------------------------------------------

/*fs.mkdir(path.join(__dirname,"/home.html"),{},(err)=>{
    if (err) throw err
})*/
// //----------------------------------------------------------------------------------------------------------------

const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "Home", "About.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.end(data);
      }
    );
  }
  if (req.url === "/home") {
    fs.readFile(
      path.join(__dirname, "Home", "Home.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.end(data);
      }
    );
  }
});

Port = 5000;
server.listen(Port, () => console.log(`Server is running on ${Port}`));

//----------------------------------------------------------------------------------------------------------------

// const express=require('express')
// const app=express()

// app.get("/",(req,res)=>{
//     res.send("Welcome")
// })

// app.get("/home",(req,res)=>{
//     res.send("Nice to  meet you..")
// })


// Port =  5000;
// app.listen(Port,console.log(`Server is running on  ${Port}`))

//------------------------------------------------------------------------------------------------------------

// const express=require('express')
// const app=express()

// app.use(express.static('Home'))
//  app.get("/*",(req,res)=>{
//     res.status(404)
//     res.send("not found")

// })
// Port = 5000;

// app.listen(Port,console.log(`Server is running on ${Port}`))

//-------------------------------------------------------------------------------------------------

// const express=require('express')
// const app=express()

// app.get("/home",Token,validation,(req,res)=>{
//     //res.status(404)
//     console.log("Login");
//     res.send("Welcome")

// })


// function Token(req,res,next) {
//     console.log("Token Creating..");
//      next();
//         // setTimeout(()=>{
//         //     // const TOKEN="1234"
//         //     // req.token=TOKEN;
//         //     console.log("token creating");
//         //     next();

//         // },8000)
//     }
// function validation(req,res,next) {
// console.log("Token approved");
//   next();
// // setTimeout(() => {
// //     console.log("Token aproved");
// //     next()
    
// // }, 8000);
//     }
// Port = 5000;
// app.listen(Port, () => console.log(`Server is running on  ${Port}`))

//--------------------------------------------------------------------------------------------------------
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.write(req.url)
//     console.log(req.url);
//     res.end()
// })
// Port=3000;
// server.listen(Port,()=>console.log(`Server is  running on ${Port}`))

//------------------------------------------------------------------------------------------------------

// const express=require('express')
// const app=express()
// app.get("/home",Token,validation,(req,res)=>{
//     res.send("Welcome")

// })
// function Token(req,res,next) {
//     console.log("Token Creating");
//     // req.token=false;
//     next();
// }
// function validation(req,res,next) {
//     // if (req.token)
//     // {
//     console.log("Token Approved");
//     next();
//     // }
//     // else{
//     //     console.log("no token");
//     //     res.send("no token")
//     // }
// }
// Port =4000;
// app.listen(Port, () => console.log(`Server is ${Port}`))

//---------------------------------------------------------------------------------------------------------------

// const express=require('express')
// const app=express()

// app.get("/home",Token,validation,(req,res)=>{
//     //res.status(404)
//     console.log("Login");
//     res.send("Welcome")

// })
// function Token(req,res,next) {
//    console.log("Token Creating..");
//         setTimeout(()=>{
//             //const TOKEN="1234"
//             req.token=false;
//             next();
//         },8000)

// }
// function validation(req,res,next) {
//     if(req.token)
//     {
//         console.log("Token Approved");
//         next();
//     }
//     else
//     {
//         console.log("No Token");
//         res.send("No token")
//     }

// }
// Port = process.env.Port || 3000;
// app.listen(Port, () => console.log(`Server is ${Port}`))

//------------------------------------------------------------------------------------------------------

// const express=require('express');
// const Token = require('./Middleware/Token');
// const Validation = require('./Middleware/Validation');
// const app=express()

// const middleware=[Token,Validation]
// app.get("/home",middleware,(req,res)=>{

//     console.log("Login")
//     res.send("Welcome")

// })
// Port = 4000;
// app.listen(Port, () => console.log(`Server is ${Port}`))




//----------------------------------------------------------------------------------------------------

// const router = require("./Router/TestRouter")

// const express=require('express')

// const app=express()
//  app.use(express.json())

// app.use('/',router)


// Port =5000;
// app.listen(Port, () => console.log(`Server is running on  ${Port}`))   

//----------------------------------------------------------------------------------------------------------

// function sample(a,b)
// {
// console.log(a+b);
// }
// sample(10,20)
