const heads=require('../Model/Heads')

exports.addHeads=async(req,res)=>{
    const {name,emp_number,age,image,description,departmentName}=req.body
    try{
        const existingHead=await heads.findOne({emp_number})
        if(existingHead){
            res.status(406).json("Department Head already exist")

        }else{
            const newHead=new heads({
                name,emp_number,age,image,description,departmentName
            })
            await newHead.save()
            res.status(200).json(newHead)
        }
        
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
exports.getAllHeads=async(req,res)=>{
    try{
        const result=await heads.find()
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

exports.getdepartmentHead=async(req,res)=>{
    const {name}=req.params
    try{
        const result = await heads.find({ departmentName: { $regex: new RegExp(name, 'i') } });
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
exports.deleteHead=async(req,res)=>{
    const {_id}=req.body
    try{
        const result=await heads.findByIdAndDelete({_id})
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

exports.editHead=async(req,res)=>{
    const {_id,name,emp_number,age,image,description,departmentName}=req.body
    try{
        const result=await heads.updateOne({_id},{name,emp_number,age,image,description,departmentName})
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

exports.getOneHead=async(req,res)=>{
    const {id}=req.params
    try{
        const result=await heads.findOne({_id:id})
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
exports.getOneHeadname=async(req,res)=>{
    const {name}=req.params
    console.log(name);
    try{
        const result=await heads.findOne({ name: { $regex: new RegExp(name, 'i') } })
        res.status(200).json(result)
    }catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}