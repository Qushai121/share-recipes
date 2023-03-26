import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { User } from "./userModel.js";

export const myBookmarkList = db.define('myBookmarkList',{
    myBookmark:{
        type:DataTypes.INTEGER
    }
},{
    freezeTableName:true,
    timestamps:false

})


User.hasMany(myBookmarkList)
myBookmarkList.belongsTo(User)