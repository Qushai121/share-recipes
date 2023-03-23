import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const token = res.locals.accessToken
    
    if (token == null) return res.sendStatus(400)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode) => {
        if (err) return res.json('token expires sir')
        res.locals.userId = decode.userId
        res.locals.usernames = decode.usernames
        res.locals.emails = decode.emails
        next()
    })

}