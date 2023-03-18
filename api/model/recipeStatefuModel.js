import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { Recipe } from "./recipeModel.js";
// import { Recipe } from "./recipeModel.js";



export const recipeStatefull = db.define('recipeStatefull',{
    bookmark:{
        type:DataTypes.INTEGER
    },
    rating:{
        type:DataTypes.INTEGER
    },
    like:{
        type:DataTypes.INTEGER
    }
    
},{
    // timestamps:false,
    freezeTableName:true
})

Recipe.hasOne(recipeStatefull)

// recipeStatefull.sync({force:true})