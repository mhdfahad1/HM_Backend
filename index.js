const express=require('express')
require('dotenv').config()
const cors=require('cors')
const router=require('./Router/route')
require('./DB/connection')

const hospital=express()

hospital.use(cors())
hospital.use(express.json())
hospital.use(router)
const PORT=4000||process.env.PORT

hospital.listen(PORT,()=>{
    console.log(`Hospital management  Server Started at Port :${PORT}`);
})
hospital.get('/',(req,res)=>{
    res.send('<h1>Hospital management Server Started and Waiting For client request!!!</h1>')
})