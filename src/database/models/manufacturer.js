const db = require("../connector");
const sequelize =require('sequelize');

module.exports =db.define(
    "manufacture",
    {
        "name":{
            type: sequelize.STRING
        },
        
        "location":{
            type:sequelize.STRING
        },

    }
);