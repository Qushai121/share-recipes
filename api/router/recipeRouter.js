import express from 'express'
import { addRecipeByMe, deleteRecipeByMe, getAllRecipes, getBookmarkAllByMe, getBookmarkById, getBookmarkByMe, getLikeById, getlikeByMe, getRecipeByMe, getRecipesByTittle, getTrendingRecipes, updateBookmark, updateLike } from '../controller/recipeController.js'
import { refreshTheToken } from '../controller/tokenController.js'
import { verifyLike } from '../middleware/verifyLike.js'
import { verifyToken } from '../middleware/verifyToken.js'
import { verifyBookmark } from '../middleware/verifyBookmark.js'

const router = express.Router()

// rules User adalah orang yang belom login 
// rules Chef adalah orang yang sudah login 

// All User
router.get('/recipe',getAllRecipes )
router.get('/trending', getTrendingRecipes)
router.get('/search',getRecipesByTittle)
// All User


// khusus CHEF
router.get('/recipeme', refreshTheToken, verifyToken, getRecipeByMe)
router.post('/add/recipeme', refreshTheToken, verifyToken, addRecipeByMe)
router.delete('/delete/recipeme/:id',refreshTheToken, verifyToken,deleteRecipeByMe)
// khusus CHEF


// Fitur Like
router.post('/getlike/:id',getLikeById)
router.post('/like/:id',refreshTheToken,verifyToken,verifyLike,updateLike)
router.get('/likeme/:id',refreshTheToken,verifyToken,getlikeByMe)
// Fitur Like

// fitur Bookmark
router.get('/getallbookmark',refreshTheToken,verifyToken,getBookmarkAllByMe)
router.post('/getbookmark/:id',getBookmarkById)
router.post('/bookmark/:id',refreshTheToken,verifyToken,verifyBookmark,updateBookmark)
router.get('/bookmarkme/:id',refreshTheToken,verifyToken,getBookmarkByMe)
// fitur Bookmark



export default router