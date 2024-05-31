function validation2(req,res,next) {
    console.log("Token Approved");
    next();
    }
    module.exports=validation2;