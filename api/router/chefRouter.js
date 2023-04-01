import express from "express"
import { getChefAll, getChefById } from "../controller/chefController.js"

  
  
  
const router = express.Router()
// ambil seluruh chef 
router.get('/chef',getChefAll)
router.get('/chef/:id',getChefById)

// Private Fetch For Chef Only


export default router