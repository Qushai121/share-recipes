import { Op } from "sequelize"
import { Recipe } from "../model/recipeModel.js"
import { recipeStatefull } from "../model/recipeStatefuModel.js"
import { User } from "../model/userModel.js"

export const getTrendingRecipes = async (req, res) => {
    try {
        const result = await Recipe.findAll({
            include:[
                {model:User,attributes:['avatar','username']},
                { model: recipeStatefull}
            ],
            order:[
                // cari tanggal terbesar == terbaru
                // lalu cari like terbesara
                //  ['createdAt','DESC'],
               [recipeStatefull,"like","DESC"]
            ],
            // muncul kan hanya 5 like terbesar 
            limit:5,
        })
        
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

// CHEF itu adalah user yang sudah login
// jadi dia bisa create-update-delete sesuai recipes yang dia punya/buat
// PRIVATE FOR CHEF ONLY

export const getRecipeByMe = async (req, res) => {
    // res.json('tokaosodkkasjdb')
    // res.json(res.locals.usernames)
    try {
        const result = await Recipe.findAll({
            include: [{ model: recipeStatefull }],
            where: {
                UserId: res.locals.userId
            }
        })
        res.json({ result })
    } catch (error) {
        console.log(error)
    }
}

export const addRecipeByMe = async (req, res) => {
    // console.log(req.body)
    // console.log(res.locals.avatars)
    const { tittle, thumbnail_main, thumbnail_second, about_food, ingredient, time, step, category } = req.body
    try {
        const result = await Recipe.create({
            tittle, thumbnail_main, thumbnail_second, about_food, ingredient, time, step, category,
            UserId: res.locals.userId
        })
        res.json('Your Recipe Succefully Created')
    } catch (error) {
        res.json('gagal')
        console.log(error)
    }
}


export const deleteRecipeByMe = async (req,res)=>{
    console.log(req.params.id)
    try {
       await Recipe.destroy({
            where:{
                id:req.params.id,
            UserId: res.locals.userId
                
            }
        })
        res.json('berhasil di hapus')
    } catch (error) {
        console.log(error)
    }
}



export const updateLike = async (req,res) => {
    try {
        const res = await recipeStatefull.update(
            {like:+1}
            ,
            {
            where:{
                id:req.params.id
            }
        })
        res.json(berhasil)
    } catch (error) {
        console.log(error)
    }
}