const fs=require('fs')
console.log(fs);


fs.writeFile('Sample.html',"Trust the timing \n",(err)=>{       // Writes data to a file, overwriting the file if it already exists.
    if (err) throw err
})

fs.appendFile('Sample.html','of your life',(err)=>{
    if (err) throw err
})
/*fs.writeFile('Sample.html','Lets start ',(err)=>{   //overwrite the cntnt
    if (err) throw err
})*/

