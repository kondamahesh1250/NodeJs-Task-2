var express = require("express");
var fs = require("fs");
var app = express();
var cors = require("cors");
const exp = require("constants");

app.use(cors());
app.use(express.json())

app.get("/data",(req,res)=>{

    fs.readFile("db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err.message);
        }
        else{
            res.send(data)
        }
    })
})

port=3000;

app.listen(port,()=>{
    console.log("server started");
})