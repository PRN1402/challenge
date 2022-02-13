const express = require("express");

const router = express.Router();

const {ArgoModel} = require("../DBConf/argosModel");

router.get('/',(req,res) => {
    ArgoModel.find((err, docs) => {
    if (!err){ 
        res.render('index.ejs', {messages: docs});
   //     console.log(docs.name);
    }
        else console.log("error to get data"+ err);
    })
});

router.post("/argos",(req,res) => {
    console.log("req.body.name : " + req.body.name);
    const newRecord = new ArgoModel({
        name: req.body.name,
        
    });
    newRecord.save((err, docs)=>{
        res.redirect("/");
      
        });
    });
module.exports = router;
 