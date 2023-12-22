const employees=require('../Model/employee')

exports.addEmployee = async (req, res) => {
    const { name, emp_number, age, image,description,departmentName, headName} = req.body
    try {
        const existingEmployee=await employees.findOne({emp_number})
        if(existingEmployee){
            res.status(406).json("employee already exist")

        }else{
            const newemployee = new employees({
                name, emp_number, age, image,description,departmentName, headName
            })
            await newemployee.save()
            res.status(200).json(newemployee)
        }
        
    }
    catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
exports.getEmployee=async(req,res)=>{
    const {name}=req.params
    // console.log(name);
    try{
        const result = await employees.find({ departmentName: { $regex: new RegExp(name, 'i') } });
        res.status(200).json(result)
    }
    catch (err) {
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
exports.deleteemployee=async(req,res)=>{
    const {_id}=req.body
    try{
        const result=await employees.findByIdAndDelete({_id})
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
exports.editEmployee=async(req,res)=>{
    const {_id,name, emp_number, age, image,description,departmentName, headName}=req.body
    try{
        const result=await employees.updateOne({_id},{name,emp_number, age, image, description,departmentName, headName})
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
exports.getOneEmployee=async(req,res)=>{
    const {id}=req.params
    try{
        const result=await employees.findOne({_id:id})
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
