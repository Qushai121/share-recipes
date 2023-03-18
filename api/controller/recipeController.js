import { Op } from "sequelize"
import { Recipe } from "../model/recipeModel.js"
import { recipeStatefull } from "../model/recipeStatefuModel.js"

export const getTrendingRecipes = async (req, res) => {
    try {
        const result = await Recipe.findAll({
            order:[
                // cari tanggal terbesar == terbaru
                // lalu cari like terbesara
                ['createdAt','DESC'],[recipeStatefull,"like","DESC"]
            ],
            // muncul kan hanya 5 like terbesar dan tanggal terbaru
            limit:5,
            include: [{ model: recipeStatefull}]
            
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

    try {
        const result = await Recipe.findAll({
            include: [{ model: recipeStatefull }],
            where: {
                UserId: res.locals.userId
            }
        })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}
