const admins=require('../Model/Admin')


exports.adminLogin=async(req,res)=>{
    const {email,password}=req.body

    try{
        const existingAdmin=await admins.findOne({email,password})
        if(existingAdmin){
            res.status(200).json(existingAdmin)
        }else{
            res.status(404).json("incorrect email or password")
        }
    }
    catch(err) {
        res.status(401).json(`error transaction failed :${err}`)

    }
}