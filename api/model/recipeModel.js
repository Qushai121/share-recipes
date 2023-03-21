import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { User } from "./userModel.js";


export const Recipe = db.define('recipe',{
    maker:{
        type:DataTypes.STRING
    },
    tittle:{
        type:DataTypes.STRING
    },
    thumbnail_main:{
        type:DataTypes.TEXT
    },
    thumbnail_second:{
        type:DataTypes.TEXT
    },
    about_food:{
        type:DataTypes.TEXT
    },
    ingredient:{
        type:DataTypes.TEXT
    },
    time:{
        type:DataTypes.INTEGER
    },
    step:{
        type:DataTypes.TEXT
    },
    category:{
        type:DataTypes.TEXT
    },
   

},{
    // timestamps:false,
    freezeTableName:true
})

User.hasMany(Recipe)

// Recipe.hasOne(recipeStatefull);
// // recipeStatefull.belongsTo(Recipe,{
// //     foreignKey:'recipeId'
// // })

// db.sync({force:true})