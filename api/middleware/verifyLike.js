import { myLikeList } from "../model/likeModel.js"
import { recipeStatefull } from "../model/recipeStatefuModel.js"

export const verifyLike = async(req,res,next) => {
    const result = await recipeStatefull.findAll({
        where:{
            recipeId:req.params.id
        }
    })

    const check = await myLikeList.findAll({
        where:{
            myLike:result[0].recipeId,
            UserId:res.locals.userId
        }
    })
    console.log(check >= 0)
    // console.log(check >= 0)
    if(check >= 0){
        next()
    }else{
        res.status(402).json('kamu sudah like')
    }

    
}