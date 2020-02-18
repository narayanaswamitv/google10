const db=require("./connector");
const sequelize=require("sequelize");
const property=db.define(
    "property",
    {
      "color": {
          type:sequelize.STRING
      },
      "weight": {
           type:sequelize.DOUBLE
      }
      "size": {
        type:sequelize.DOUBLE
   }
       
       

    }
)