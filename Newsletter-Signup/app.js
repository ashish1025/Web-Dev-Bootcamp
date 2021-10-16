const express = require("express");
//const bodyParser = require("body-parser");
const request = require("request");

const app=express();

app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/",function(req,res){
        res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    var firstname=req.body.fname;
    var lastname=req.body.lname;
    var email=req.body.email;
    console.log(firstname, lastname, email);
});

app.listen(3000,function(req,res){
    console.log("server started on port 3000");
})



// d312bbe027a5feec8ea80144829ecef2-us5