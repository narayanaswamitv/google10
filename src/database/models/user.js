const db=require("../connector");
const sequelize=require("sequelize");


module.exports=db.define(
    "user",
    {
      "username": {
          type:sequelize.STRING
      },
      "password": {
           type:sequelize.STRING
      }
      
   
       
       

    }
)