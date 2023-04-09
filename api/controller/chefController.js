import { Recipe } from "../model/recipeModel.js"
import { recipeStatefull } from "../model/recipeStatefuModel.js"
import { User } from "../model/userModel.js"
import { response } from "../utils/response.js"

export const getChefAll = async (req, res) => {
    try {
        const result = await User.findAll({
            include: [{ model: Recipe,include:[
                {model:recipeStatefull,order: [
                    [ "like", "DESC"]
                ],},
                
            ] }],
            attributes: ['id', 'username', 'avatar', 'email'],
            
        })
        response(200,result,"getting your request",res)
    } catch (error) {
        console.log(error)
    }
}

export const getChefById = async (req, res) => {
    try {
        const result = await User.findAll({
            where: {
                id: req.params.id
            },
            attributes:['username','avatar','id'],
            include: [
                { model: Recipe,include:[
                    {model:recipeStatefull},
                    {model:User,
                        attributes:['username','avatar','id']
                    }
                ] },
                
            ],
            order: [
                [Recipe, "id", "DESC"]
            ],
        })

            let john = 0;
           for(let i = 0;i < result[0].recipes.length;i++){
          john += result[0].recipes[i].recipeStatefull.like
        }
        
        // console.log(john)
        res.json([result[0],{totalLike:john}])
    } catch (error) {
        console.log(error)
    }
}