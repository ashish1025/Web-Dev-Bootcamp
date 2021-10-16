const express=require("express");
const app=express();

app.listen(3000,function(){
    console.log("Server started at port on 3000");
});

app.get("/",function(request,response){
    response.send("<h1>Hello World!</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at ac@gmail.com");
});

app.get("/aboutme",function(req,res){
    res.send("<h1>About me</h1><br>Heyy there!! I am Ashish");
});

app.get("/hobies",function(req,res){
    res.send("<ul><li>Swimming</li><li>playing cricket</li><li>Coding</li></ul>");
});


