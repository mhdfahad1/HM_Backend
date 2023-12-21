const departments = require('../Model/department')

exports.addDepartment = async (req, res) => {
    const { name, image, year, description } = req.body
    try {
        const newDepartment = new departments({
            name, image, year, description
        })
        await newDepartment.save()
        res.status(200).json(newDepartment)
    }
    catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

exports.getDepartments=async(req,res)=>{
    try{
        const result=await departments.find()
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

exports.deleteDepartments=async(req,res)=>{
    const {_id}=req.body
    try{
        const result=await departments.findByIdAndDelete({_id})
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

exports.editDepartments=async(req,res)=>{
    const {_id,name, image, year, description}=req.body
    try{
        const result=await departments.updateOne({_id},{name, image, year, description})
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
exports.getOneDepartments=async(req,res)=>{
    const {id}=req.params
    try{
        const result=await departments.findOne({_id:id})
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}