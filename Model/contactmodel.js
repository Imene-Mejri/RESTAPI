const mongoose = require('mongoose')
const schema = mongoose.Schema

const ContactSChema = new schema({
    name: {
        type: String,
        require: true

    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    dateCreation:{
        type:Date,
        default:Date.now()

    }
})
module.exports=Contacts=mongoose.model('contact',ContactSChema)