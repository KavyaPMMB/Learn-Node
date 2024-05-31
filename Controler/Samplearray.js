function Samplearray(req,res) {
    const {id,name,place,qualification}=req.body;
    console.log(id,name,place,qualification);
    res.json({id,name,place,qualification})
}
module.exports=Samplearray