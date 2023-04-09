export const response = (status,data,messge,res)=> {
    res.json(status,[
        {
            data,
            messge
        }
    ])
}

// CI PUCEK