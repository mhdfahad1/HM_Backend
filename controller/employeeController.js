const employees=require('../Model/employee')

exports.addEmployee = async (req, res) => {
    const { name, emp_number, age, image,description,department, headname} = req.body
    try {
        const newemployee = new departments({
            name, emp_number, age, image,description,department, headname
        })
        await newemployee.save()
        res.status(200).json(newemployee)
    }
    catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}