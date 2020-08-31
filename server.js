const express = require('express');
const path = require('path');
const app=express();

app.use(express.static(__dirname+'/dist/tbdemo'))
// Launch server with options and a couple of routes
app.get('/*',function(req,res){

    res.sendFile(path.join(__dirname+'/dist/tbdemo/index.html'))

});

app.listen(process.env.PORT ||8080);