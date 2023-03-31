import express from "express";
import userRouter from "./router/authRouter.js"
import recipeRouter from "./router/recipeRouter.js"
import chefRouter from "./router/chefRouter.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import { db } from "./config/db.js";
import multer from "multer";


const app = express()
dotenv.config()
app.use(express.static("public/uploads"))
app.use(cookieParser())
app.use(express.json())
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))


// db.sync()

// upload image start
// https://www.npmjs.com/package/multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    const name = file.originalname
    cb(null,Date.now()+name.replace(/\s/g, ""))
  }
})

const upload = multer({storage})

app.post('/upload', upload.single('file'), function (req, res) {
  const file = req.file
    res.json(file.filename)
})
// upload image end 


app.use(userRouter)
app.use(recipeRouter)
app.use(chefRouter)


app.listen(3002, console.log('http://localhost:3002'))