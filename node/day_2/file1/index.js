const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('hoillo')
})

app.listen(3000);