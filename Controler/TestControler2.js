
const newarray=[{no:1,name:"john"},{no:2,name:"James"},]

function array(req,res) {
        
        res.send(newarray)
        console.log(newarray);
        
                        }
    module.exports=array