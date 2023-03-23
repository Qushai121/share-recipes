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
import multer from "multer";
import path from "path"


const app = express()
dotenv.config()
app.use(express.static("public/uploads"))
app.use(cookieParser())
app.use(express.json())
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))



// upload image start
// https://www.npmjs.com/package/multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,Date.now()+uniqueSuffix+file.originalname)
  }
})

const upload = multer({storage})

app.post('/upload', upload.single('file'), function (req, res) {
  const file = req.file
  console.log(file.filename)
    res.json(file.filename)
})
// upload image end 


// // upload image start
// // https://www.npmjs.com/package/multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null,Date.now()+uniqueSuffix+file.originalname)
//   }
// })

// const upload = multer({storage})

// app.post('/upload', upload.single('file'), function (req, res) {
//   const file = req.file
//   console.log(file.filename)
//     res.json(file.filename)
// })
// // upload image end 


app.use(userRouter)
app.use(recipeRouter)
app.use(chefRouter)


// app.use(Recipe)
// app.use(recipeRouter)
// app.use(recipeStatefull)
// db.sync({force:true})

app.listen(3002, console.log('http://localhost:3002'))