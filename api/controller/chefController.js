import { Recipe } from "../model/recipeModel.js"
import { User } from "../model/userModel.js"

export const getChefAll = async (req, res) => {
    try {
        const result = await User.findAll({
            include: [{ model: Recipe }],
            attributes: ['id', 'username', 'avatar', 'email'],
        })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const getChefById = async (req, res) => {
    try {
        const res = await User.findAll({
            include: [{ model: Recipe }],
            where: {
                id: req.params.id
            }
        })
        res.json(res)
    } catch (error) {
        console.log(error)
    }
}