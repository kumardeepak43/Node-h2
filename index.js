const express = require('express');


const app = express();

app.get('/home',(req,res)=>{
    console.log(req);
    res.send(JSON.stringify([5,6,7]));
})

app.get('/about/deepak',(req,res)=>{
    res.send(JSON.stringify([5,6,7]));
})

app.listen('5000',(req, res) => {
    console.log(req);
})