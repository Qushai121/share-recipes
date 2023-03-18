import { User } from "../model/userModel.js"
import jwt from "jsonwebtoken"

export const refreshTheToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken
        // const accessTokens = req.headers['authorization']
        // const accessToken = accessTokens?.split(' ')[1]
        // if(!accestoken) return res.status(400)
        // console.log(accessToken)
        // console.log('apapaaaaa')
        // console.log(refreshToken)
        if (!refreshTheToken) return res.status(400).json('token g ada')
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
            const roles = decoded.roles
            console.log(roles)
            // const name = result[0].username;
            // const email = result[0].email;
            const accessToken = jwt.sign({ userId, usernames, emails, roles }, process.env.ACCESS_TOKEN, {
                expiresIn: '20s'
            });

            // nyoba langsung bikin accessToken baru di backend tanpa axios intercepter
            res.locals.accessToken = accessToken
            // console.log(accessToken)

            // res.json({accessToken})
            next()
        })
    } catch (error) {
        console.log(error)
    }

}