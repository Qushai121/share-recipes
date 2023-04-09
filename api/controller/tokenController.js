import { User } from "../model/userModel.js"
import jwt from "jsonwebtoken"

export const refreshTheToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) return res.status(400).json('you should login properly ')
        const result = await User.findOne({
            where: {
                refresh_token: refreshToken
            }
        })
        if (!result) return res.json({ authorize: "anda tidak" })
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN, async (err, decoded) => {
            if (err) return res.status(403).json({ msg: "tau ah sir " })
            // const userId = result[0].id;
            const userId = decoded.userId
            const usernames = decoded.usernames
            const emails = decoded.emails
            const accessToken = jwt.sign({ userId, usernames, emails}, process.env.ACCESS_TOKEN, {
                expiresIn: '20s'
            });

            // nyoba langsung bikin accessToken baru di backend tanpa axios intercepter
            res.locals.accessToken = accessToken

            next()
        })
    } catch (error) {
        console.log(error)
    }

}