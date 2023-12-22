const express=require('express')
const router=new express.Router()
const adminController=require('../controller/adminController')
const departmentController=require('../controller/departmentController')
const employeeController=require('../controller/employeeController')
const headController=require('../controller/headController')

// admin login
router.post('/admin/login',adminController.adminLogin)
// add department
router.post('/add/department',departmentController.addDepartment)
// get departments
router.get('/get/department',departmentController.getDepartments)
// delete depratment
router.delete('/delete/department',departmentController.deleteDepartments)
router.delete('/delete/employee',employeeController.deleteemployee)

router.delete('/delete/head',headController.deleteHead)


router.put('/edit/department',departmentController.editDepartments)
router.put('/edit/employee',employeeController.editEmployee)
router.put('/edit/head',headController.editHead)


router.get('/get/one/department/:name',departmentController.getOneDepartments)

router.post('/add/employee',employeeController.addEmployee)

router.post('/add/head',headController.addHeads)

router.get('/get/head',headController.getAllHeads)

router.get('/get/department/employees/:name',employeeController.getEmployee)

router.get('/get/department/heads/:name',headController.getdepartmentHead)

router.get('/get/one/employee/:id',employeeController.getOneEmployee)

router.get('/get/one/head/:id',headController.getOneHead)

router.get('/get/one/head/name/:name',headController.getOneHeadname)

module.exports=router
