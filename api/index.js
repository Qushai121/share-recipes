import express from "express";
import userRouter from "./router/authRouter.js"
import recipeRouter from "./router/recipeRouter.js"
import chefRouter from "./router/chefRouter.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { Recipe } from "./model/recipeModel.js";
import cors from "cors"
import { recipeStatefull } from "./model/recipeStatefuModel.js";
import { db } from "./config/db.js";

const app = express()
dotenv.config()
app.use(cookieParser())
app.use(express.json())
app.use(cors({credentials:true,origin:"http://localhost:3000"}))
app.use(userRouter)
app.use(recipeRouter)
app.use(chefRouter)
// app.use(Recipe)
// app.use(recipeRouter)
// app.use(recipeStatefull)
// db.sync({force:true})

app.listen(3002,console.log('http://localhost:3002'))