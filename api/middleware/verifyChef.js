export const verifyChef = (req,res) =>{
    if(res.locals.roles == 'client') return res.json("Your not have chef role yet")
    if(res.locals.roles == 'chef'){
        next()
    }
}