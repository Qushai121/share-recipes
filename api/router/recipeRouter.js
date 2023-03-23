import express from 'express'
import { addRecipeByMe, deleteRecipeByMe, getRecipeByMe, getTrendingRecipes } from '../controller/recipeController.js'
import { refreshTheToken } from '../controller/tokenController.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

router.get('/recipe', getTrendingRecipes)

// khusus CHEF
router.get('/recipeme', refreshTheToken, verifyToken, getRecipeByMe)
router.post('/add/recipeme', refreshTheToken, verifyToken, addRecipeByMe)
router.delete('/delete/recipeme/:id',refreshTheToken, verifyToken,deleteRecipeByMe)

export default router