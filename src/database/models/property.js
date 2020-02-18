const db=require("../connector");
const sequelize=require("sequelize");
module.exports=db.define(
    "property",
    {
      "color": {
          type:sequelize.STRING
      },
      "weight": {
           type:sequelize.DOUBLE
      }
      
   
       
       

    }
)