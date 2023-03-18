import { DataTypes, Sequelize } from "sequelize";
import { db } from "../config/db.js";

export const User = db.define('User',{
    username:{
        type:DataTypes.STRING
    },
    avatar:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    refresh_token:{
        type:DataTypes.TEXT
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:"client"
    }
},{
    freezeTableName:true
})

// User.sync()