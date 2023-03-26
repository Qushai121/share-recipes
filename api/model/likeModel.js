import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { User } from "./userModel.js";

export const myLikeList = db.define('myLikeList',{
    myLike:{
        type:DataTypes.INTEGER
    }
},{
    freezeTableName:true,
    timestamps:false
})

User.hasMany(myLikeList)
myLikeList.belongsTo(User)