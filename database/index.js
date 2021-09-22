const {Sequelize}=require("sequelize");
const router = require("../routes");

const sequelize=new Sequelize(
   "dbname",
   "user",
   "password",
    {
        host:"localhost",
        dialect:"postgres"
    }
)
sequelize.sync();
(async()=>{
    try{
        await sequelize.authenticate();
        console.log("connection established with DB")
    }catch (err){
         console.error("unable to connect with DB")
    }
})();

module.exports=sequelize
