import Usuario from "../models/user.model.js"


export const register = async (req,res) => {
        const {username,email,password} = req.body

        try {
                const newUser = new Usuario({
                        username,
                        email,
                        password
                })
        
        
        
        
                const userSaver = await newUser.save()
                res.json(userSaver)
        } catch (error) {
                console.log(error)
        }

       
}

export const login = (req,res) => res.send("Login")

