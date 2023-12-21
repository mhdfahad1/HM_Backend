const express=require('express')
const router=new express.Router()
const adminController=require('../controller/adminController')
const departmentController=require('../controller/departmentController')
const employeeController=require('../controller/employeeController')
// admin login
router.post('/admin/login',adminController.adminLogin)
// add department
router.post('/add/department',departmentController.addDepartment)
// get departments
router.get('/get/department',departmentController.getDepartments)
// delete depratment
router.delete('/delete/department',departmentController.deleteDepartments)

router.put('/edit/department',departmentController.editDepartments)
router.get('/get/one/department/:id',departmentController.getOneDepartments)

router.post('/add/employee',employeeController.addEmployee)

module.exports=router
