import User from '../models/userModels.js'
import asyncHandler from 'express-async-handler'


const authUser = asyncHandler(async(req, res)=> {
    const {email, password} = await req.body
    const user = await User.findOne({email})
    if(user && ( await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            password: user.password,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null
        })
    } else{
        res.status(401)
        throw new Error("Invalid email or password")
    }
})

export {authUser}