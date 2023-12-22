const admins=require('../Model/Admin')
const jwt=require('jsonwebtoken')

exports.adminLogin=async(req,res)=>{
    const {email,password}=req.body

    try{
        const existingAdmin=await admins.findOne({email,password})
        const token=jwt.sign({userId:existingAdmin._id},process.env.SECRET)
        if(existingAdmin){
            res.status(200).json({
                existingAdmin,
                token
            })
        }else{
            res.status(404).json("incorrect email or password")
        }
    }
    catch(err) {
        res.status(401).json(`error transaction failed :${err}`)

    }
}