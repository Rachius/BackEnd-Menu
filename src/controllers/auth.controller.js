import Usuario from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'
import  jwt  from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"

export const register = async (req,res) => {
        const {username,email,password} = req.body
        try {
                const userFound = await  Usuario.findOne({username})
                if (userFound) 
                return  res.status(400).json(["the username already exists"])
                const emailFound = await  Usuario.findOne({email})
                        if (emailFound) 
                        return  res.status(400).json(["the email already exists"])


                const passwordHash = await bcrypt.hash(password,10)

                const newUser = new Usuario({
                        username,
                        email,
                        password: passwordHash,
                        estado: true,
                        rol: "user"

                })
                
                
        
        
        
                const userSaved = await newUser.save()
                const token = await createAccessToken({id: userSaved._id})
                res.cookie("token",token)
                res.json({
                        id: userSaved._id,
                        username : userSaved.username,
                        email : userSaved.email,

               })



        } catch (error) {
                res.status(500).json(error.message)
        }

       
}

export const login = async (req,res) => {
        const {email,password} = req.body
        

        try {

                const userFound = await Usuario.findOne({email})
              
                if(!userFound) return res.status(400).json(["invalid login"])                


                const isMatch = await bcrypt.compare(password,userFound.password)

                if(!isMatch) return res.status(400).json(["invalid login"])
                   

                const token = await createAccessToken({id: userFound._id})
                res.cookie("token",token)
                res.json({
                        id: userFound._id,
                        username : userFound.username,
                        email : userFound.email,

               })



        } catch (error) {
                res.status(500).json({message: error.message})
        }

       
}

export const logout =  (req,res) => {
        res.cookie('token','',{expires : new Date(0)})

        return res.status(200).json({message:"Logout succesful"})
}

export const profile = async (req,res) => {

        const userFound = await Usuario.findById(req.user.id)

        if(!userFound) return res.status(400).json({message : "User not found"})

        return res.json({
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                createdat: userFound.createdAt
        })

}

export const verifyToken = async (req,res) => {

        const {token} =  req.cookies

        if(!token) return res.status(401).json(["Unauthorized"])

        jwt.verify(token,TOKEN_SECRET,async  (err,user)=>{
                if (err) return res.status(401).json(["Unauthorized"])

                const userFound = await Usuario.findById(user.id)
                if(!userFound) return res.status(401).json(["Unauthorized"])
        })

}

