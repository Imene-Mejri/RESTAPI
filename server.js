const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
connectDB()


require("dotenv").config()

  app.use(express.json())
  app.use('/api/Contacts',require('./routes/Contact')) 



const port=4000










app.listen(port,(error)=>{
    error?console.log(error):console.log(`the server is running on ${port}`)
})





//creation de serveur