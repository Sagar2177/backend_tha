const User=require('../models/user')
const bcrypt =require('bcrypt')
const saltRounds=10;
const register=async(req,res)=>{
 const {email,password}=req.body;
try{
    const alreadyExists=await User.findOne({where:(email)});
    if(alreadyExists){
        res.status(401).send("email already exitst")
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser=new User({
        email:email.toLowerCase(),password:hash
    })
    const savedUser=await newUser.save();
    res.status(201).send("user registered")
}catch(err){
    console.error(err);
          
}

}
module.exports=register;