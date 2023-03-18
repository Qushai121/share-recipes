import express from 'express'
import { body } from 'express-validator'
import { refreshTheToken } from '../controller/tokenController.js'
import { getMe, login, logout, register } from '../controller/authController.js'
import {verifyToken} from '../middleware/verifyToken.js'



const router = express.Router()
// registrari akun
router.post('/register',
body('username').isLength({min:1}).withMessage('You should Fill Your username'),
body('email').isEmail().withMessage('You should Input Email'),
body('password').isLength({min:6}).withMessage('Password At least have 6 letter'),
body('confpassword').custom((value, { req }) => {
  if (value !== req.body.password) {
    throw new Error('Password confirmation does not match password');
  }
  return true;
  })
  
  ,register)
  
  // Login
  router.post('/login',login)
  // logout
  router.delete('/logout',logout)
  // refresh token
  router.get('/refresh',refreshTheToken)

  router.get('/user',refreshTheToken,verifyToken,getMe)


export default router