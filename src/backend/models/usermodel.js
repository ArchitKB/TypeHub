const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        uppercase:true
    },
    email:{
        type:String,
        required:true,
        uppercase:true
    },
    password:{
        type:String,
        required:true,
        
    }
    

})
const UserModel=mongoose.model("UserModel",UserSchema)

module.exports=UserModel
