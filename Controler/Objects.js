function Objects(req,res) {
    
    const {name,place}=req.body;
    console.log(name,place);
    res.json({name,place})
}
module.exports=Objects
