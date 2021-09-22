const {DataTypes}=require('sequelize');
const sequelize=require("../database")

const User=sequelize.define('User',{
    fullName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email
});

modules.exports=User