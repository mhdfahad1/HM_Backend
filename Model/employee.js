const mongoose=require('mongoose')

const employeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emp_number:{
        type:String,
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
    department:{
        type:String,
        required:true
    },
    headname:{
        type:String,
        required:true
    }
})

const employees=mongoose.model('employees',employeeSchema)
module.exports=employees