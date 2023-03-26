import { Op } from "sequelize"
import { myLikeList } from "../model/likeModel.js"
import { Recipe } from "../model/recipeModel.js"
import { recipeStatefull } from "../model/recipeStatefuModel.js"
import { User } from "../model/userModel.js"

export const getTrendingRecipes = async (req, res) => {
    try {
        const result = await Recipe.findAll({
            include: [
                { model: User, attributes: ['avatar', 'username'] },
                { model: recipeStatefull }
            ],
            order: [
                // cari tanggal terbesar == terbaru
                // lalu cari like terbesara
                //  ['createdAt','DESC'],
                [recipeStatefull, "like", "DESC"]
            ],
            // muncul kan hanya 5 like terbesar 
            limit: 5,
        })

        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const getLikeById = async (req, res) => {
    // console.log(req.params.id)
    try {
        const result = await recipeStatefull.findAll({
            where: {
                recipeId: req.params.id
            }
        })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const getlikeByMe = async (req, res) => {
    console.log(req.params.id)
    try {
        const result = await myLikeList.findAll({
            where: {
                myLike:req.params.id,
                UserId: res.locals.userId
            }
        })

    //     let john = []
    //    for(let i = 0;i < result.length;i++){
    //   john.push(result[i]?.myLike)
    // }

    // console.log(john)
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}


// export const updateLike = async (req, res) => {
//     try {

//         const result = await recipeStatefull.findAll({
//             where: {
//                 id: req.params.id
//             }
//         })
//         console.log(result[0].recipeId)
//         const recipeIds = await myLikeList.findAll({
//             where: {
//                 myLike: result[0].recipeId
//             }
//         })
//         console.log(recipeIds[0].myLike >= 0)
//         if (recipeIds[0].myLike >= 0) return res.status(400).json(recipeIds[0].myLike)

//             const hasil = await myLikeList.create({
//                 myLike: result[0].recipeId,

//             },{
//                 where:{
//                     UserId:res.locals.userId
//                 }
//             })

//             await recipeStatefull.increment('like', {
//             by: 1,
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json('gagaga')

//     } catch (error) {
//         console.log(error)
//     }
// }
export const updateLike = async (req, res) => {
    try {

        await myLikeList.create({
            myLike: req.params.id,
            UserId: res.locals.userId
        })

        await recipeStatefull.increment('like', {
            by: 1,
            where: {
                id: req.params.id
            }
        })
        res.json('gagaga')
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
        try {
            await recipeStatefull.create({
                recipeId: result.id
            })
            res.json('Your Recipe Succefully Created')

        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        res.json('gagal')
        console.log(error)
    }
}


export const deleteRecipeByMe = async (req, res) => {
    // console.log(req.params.id)
    try {
        const result = await Recipe.destroy({
            where: {
                id: req.params.id,
                UserId: res.locals.userId
            }
        })
        if (result >= 0) return res.status(404).json("you not allowed to do that")
        res.json('recipe Succefully deleted')
    } catch (error) {
        console.log(error)
    }
}



