import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { User } from "./userModel.js";


export const Recipe = db.define('recipe',{
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
        type:DataTypes.STRING,
    },
    step:{
        type:DataTypes.TEXT
    },
    category:{
        type:DataTypes.TEXT
    },
   

},{
    freezeTableName:true,
    timestamps:false
})

User.hasMany(Recipe)
Recipe.belongsTo(User)


