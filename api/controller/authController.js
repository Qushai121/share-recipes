import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";
import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";
import { Recipe } from "../model/recipeModel.js";
import { where } from "sequelize";




export const register = async (req, res) => {
    const { username, email, password,avatar, confpassword } = req.body
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }



    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    try {
        const result = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (result) return res.status(400).json({ email: 'email already in use' })

        const resultname = await User.findOne({
            where: {
                username: username
            }
        })

        if (resultname) return res.status(400).json({ username: 'username already in use' })
        if (!resultname) {
            try {
                User.create({
                    'username': username,
                    'avatar':avatar,
                    'email': email,
                    'password': hash
                })
                res.status(200).json('Signup Process Success')
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body
    console.log(email)
    try {
        const result = await User.findAll({
            where: {
                email: email
            }
        })
        if (result.length <= 0) return res.status(400).json({ email: 'Email not registered please signUp  ' })
        const isMatch = bcrypt.compareSync(password, result[0].password)
        if (!isMatch) return res.status(400).json({ password: 'wrong password' })
        // payload
        const userId = result[0].id
        // username befungsi untuk mengisi field owner di resep secara auto
        const usernames = result[0].username
        const emails = result[0].email
        
        const accessToken = jwt.sign({ userId, usernames, emails }, process.env.ACCESS_TOKEN, {
            expiresIn: '20s'
        })
        const refreshToken = jwt.sign({ userId, usernames, emails }, process.env.REFRESH_TOKEN, {
            expiresIn: '7d'
        })
        await User.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        })
        // taroh di cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.json({ accessToken })
    } catch (error) {
        console.log(error)
    }
}

export const logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken) return res.status(204)
    try {
        const result = await User.findAll({
            where: {
                refresh_token: refreshToken
            }
        })
        if (!result[0]) return res.status(404);
        const userId = result[0].id
        await User.update({ refresh_token: null }, {
            where: {
                id: userId
            }
        })
        res.clearCookie('refreshToken')
        return res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const getMe = async(req,res) => {
    // res.json(res.locals.userId)
    console.log('ssss')
    try {
        const result = await User.findAll({
            where:{
                id:res.locals.userId
            }
        }) 
        res.json(result)
    } catch (error) {
        console.log(error)
    }

   
}