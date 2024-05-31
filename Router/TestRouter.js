
const hello=require("../Controler/TestControler")
const array=require("../Controler/TestControler2")
const objects=require("../Controler/Objects")
const Samplearray=require("../Controler/Samplearray")
const Newarray=require("../Controler/Newarray")
const Demo=require("../Controler/Demo")
//const Sample2=require("../Controler/Sample2")
const express=require('express')
const Sample2 = require("../Controler/Sample2")
const Objects = require("../Controler/Objects")

const router=express.Router()
router.route('/demo').get(Demo)
router.route('/sample2').get(Sample2)
router.route('/').get(hello) 
router.route("/home").get(array)
router.route("/objects").get(Objects)
router.route("/sample").get(Samplearray)
//router.route("/display").get(Newarray)
router.route("/array/:id").get(Newarray)
// router.route("/user/:id").get(Newarray)
//router.route("/:name/:age/:id").get(Newarray)

module.exports=router 














