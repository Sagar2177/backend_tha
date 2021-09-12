const express=require('express')
const app=express();
// CRUD -> POST,GET,PUT,DELETE 
// const slash=(req,res)=>{
//     res.send('hello!!')
// }
// app.get('/',slash)
// app.post('/',slash)
// app.put('/',slash)
// app.delete('/',slash)

// app.get('/products',(req,res)=>{
    // /abcd , /acd --> 2 ta tei same kaj hote hole=>
    app.get('/ab?cd',(req,res)=>{
        // abbbbbcd
        // ab+cd
// ab jkjhjjhj cd 
// ab*cd
// ab(cd)?e 
// suru a diye hok trpr ja khusi
// /a/  
// /a/,(req,res)=>{

// ses a fly thakuk
//    /.*fly$/,(req,res)=>{}


// }
   
    
//     res.status(401)
//    res.send('hii')
    // res.send = return statement er niche lekha kono code e execute hoy na 
    
    // res akta object jar modhe sendStatus r send ache 
    // res={
    //     sendStatus:null,
    //     send:function(){}
    // }
    // res.status(200).send('hello')
req.query={
    limit:50,
    q:'abcddd'
}
    res.send(req.query.q)
})

app.listen(5000)