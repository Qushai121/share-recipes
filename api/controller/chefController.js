import { Recipe } from "../model/recipeModel.js"
import { User } from "../model/userModel.js"

export const getChefAll = async (req, res) => {
    try {
        const result = await User.findAll({
            include: [{ model: Recipe }],
            attributes:['id','username','avatar','email'],
            // where:{
            //     role:"client"
            // }
        })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}
