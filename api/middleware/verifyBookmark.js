import { recipeStatefull } from "../model/recipeStatefuModel.js"
import { myBookmarkList } from "../model/bookmarkModel.js"

export const verifyBookmark = async(req,res,next) => {
    const result = await recipeStatefull.findAll({
        where:{
            recipeId:req.params.id
        }
    })

    const check = await myBookmarkList.findAll({
        where:{
            myBookmark:result[0].recipeId,
            UserId:res.locals.userId
        }
    })
    if(check >= 0){
        next()
    }else{
        res.status(402).json('kamu sudah Tandai')
    }

    
}