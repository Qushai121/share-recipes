import express from "express"
import { getChefAll } from "../controller/chefController.js"

  
  
  
const router = express.Router()
// ambil seluruh chef 
router.get('/chef',getChefAll)

// Private Fetch For Chef Only
router.get('/owner')


export default router