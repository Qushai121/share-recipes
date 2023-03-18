import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const token = res.locals.accessToken
    // const authHeader = req.headers['authorization']
    // const token = authHeader.split(' ')[1]
    // console.log(token)
    if (token == null) return res.sendStatus(400)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode) => {
        if (err) return res.json('salah tolol')
        res.locals.userId = decode.userId
        res.locals.usernames = decode.usernames
        res.locals.emails = decode.emails
        res.locals.roles = decode.roles
        // console.log(decode.userId)      
        // res.json('tokaosodkkasjdb')
        next()
    })

}