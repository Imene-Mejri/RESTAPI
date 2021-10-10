const mongoose=require('mongoose')


const connectDB = async () => {
   await mongoose.connect('mongodb://localhost/RestapiContactlist',()=>{
       
        try{
            console.log('database is connected....')
        }catch(error){
            console.log(error)
        }
    })
}
module.exports=connectDB