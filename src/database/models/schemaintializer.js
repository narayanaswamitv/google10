const product = require("./Product")
const properties = require("./property")
const category = require("./category")
const manufacture =require("./manufacturer")
const cart = require("./cart")
const user= require("./user")


const db =  require("../connector")

product.hasOne(properties);
product.belongsTo(category);


product.belongsToMany(manufacture,{
    through: "product_manufactures",
    foreignKey: "product_id",
    otherKey:"manufacture_id",
    timestamps: false
})

manufacture.belongsToMany(product,{
    through: "product_manufactures",
    foreignKey: "manufacture_id",
    otherKey:"product_id",
    timestamps: false
})

user.belongsToMany(product,{
    through:cart,
    foreignKey:"user_id",
    otherKey:"product_id",
    timestamp:"false"
})
product.belongsToMany(user,{
    through:cart,
    foreignKey:"product_id",
    otherKey:"user_id",
    timestamp:"false"
})


db.sync()
