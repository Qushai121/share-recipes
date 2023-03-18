import express from 'express'
import { getRecipeByMe, getTrendingRecipes } from '../controller/recipeController.js'
import { refreshTheToken } from '../controller/tokenController.js'
import { verifyChef } from '../middleware/verifyChef.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

router.get('/recipe', getTrendingRecipes)
// router.get('/tod',verifyToken,verifyChef)

// khusus CHEF
router.get('/recipeme', refreshTheToken, verifyToken, getRecipeByMe)

export default router