const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emp_number: {
        type: Number,
        unique: true,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    departmentName: {
        type: String,
        required: true
    },
    headName: {
        type: String,
        required: true
    }
})

const employees = mongoose.model('employees', employeeSchema)
module.exports = employees