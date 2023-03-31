import fs from 'fs'
import { Op, where } from 'sequelize'
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
            // muncul kan hanya 6 like terbesar 
            limit: 6,
        })

        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const getAllRecipes = async (req,res) =>{
    if(req.query.cate == undefined ){
        try {
        const result = await Recipe.findAll({
            include:[
                {model:User},
                { model: recipeStatefull }
            ],
        })
        res.json(result)
    } catch (error) {
        console.log(error)
    }

    }else{
        try {
        const result = await Recipe.findAll({
            include:[
                {model:User},
                { model: recipeStatefull }
            ],
            where:{
                category:req.query.cate
            }
        })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
    }
        
    
}


// export const getRecipesByTittle = async (req,res) => {
//     try {
//         const result = await Recipe.findAll({
//             include:[
//                 {model:User},
//                 { model: recipeStatefull }
//             ]
//         })

//         where:{
//             tittle:{[Op.like]: `%${req.params}%`}
//         }
//     } catch (error) {
//         console.log(error)
//     }

// }


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
                myLike: req.params.id,
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
            include: [
                { model: recipeStatefull },
                { model: User, attributes: ['avatar', 'username'] }
            ],
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

    try {
        try {
            const img = await Recipe.findAll({
                where: {
                    id: req.params.id,
                    UserId: res.locals.userId
                }
            })

            
            console.log(img[0].thumbnail_main)
            console.log(img[0].thumbnail_second)
            
            const path = "public/uploads/"
            fs.unlinkSync(path + img[0].thumbnail_main, (err) => {
                if (err) {
                    res.status(500).send({
                        message: "Could not delete the file. " + err,
                    });
                }

                res.status(200).send({
                    message: "File is deleted.",
                });
            })

            fs.unlinkSync(path + img[0].thumbnail_second, (err) => {
                if (err) {
                    res.status(500).send({
                        message: "Could not delete the file. " + err,
                    });
                }

                res.status(200).send({
                    message: "File is deleted.",
                });
            })
        } catch (error) {

        }
        await recipeStatefull.destroy({
            where:{
                recipeId:req.params.id
            }
        })


        const result = await Recipe.destroy({
            where: {
                id: req.params.id,
                UserId: res.locals.userId
            }
        })
        if (result[0] >= 0) return res.status(404).json("you not allowed to do that")
        res.json('recipe Succefully deleted')
    } catch (error) {
        console.log(error)
    }
}



