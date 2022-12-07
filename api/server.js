const express = require('express');
const app = express();
const http = require('http');
const path = require('path');



app.get('/',(req,res)=>{
 res.sendFile(__dirname+ '/web/index.html')
})

app.get('/index.css',(req,res)=>{
    res.sendFile(path.join(__dirname+ '/web/index.css'))
})

app.get('/index.js',(req,res)=>{
    res.sendFile(__dirname+ '/web/index.js');
})

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})