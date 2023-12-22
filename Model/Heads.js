const mongoose=require('mongoose')

const HeadSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emp_number:{
        type:Number,
        unique:true,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    departmentName:{
        type:String,
        required:true
    }
})

const heads=mongoose.model('heads',HeadSchema)
module.exports=heads