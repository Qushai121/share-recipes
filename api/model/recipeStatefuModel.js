import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { Recipe } from "./recipeModel.js";
// import { Recipe } from "./recipeModel.js";



export const recipeStatefull = db.define('recipeStatefull',{
    bookmark:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    rating:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    like:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
    
},{
    freezeTableName:true,
    timestamps:false
})

Recipe.hasOne(recipeStatefull)