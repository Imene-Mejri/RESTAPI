const mongoose=require('mongoose')


const connectDB = async () => {
   await mongoose.connect('mongodb+srv://imene:kamelimene1990@cluster0.kemhq.mongodb.net/atlasapii?retryWrites=true&w=majority',()=>{
       
        try{
            console.log('database is connected....')
        }catch(error){
            console.log(error)
        }
    })
}
module.exports=connectDB