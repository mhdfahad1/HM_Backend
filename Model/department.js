const mongoose=require('mongoose')

const departmentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const departments=mongoose.model('departments',departmentSchema)
module.exports=departments