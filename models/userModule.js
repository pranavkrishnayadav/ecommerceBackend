import mongoose from "mongoose";

import validator from "validator";


const userSchema = new mongoose.Schema({

     
    u_name:{
        type:String,
        required:[true,"Name is Required"]
    },
    u_pwd:{
        type:String,
        required:[true,"Email is Required"]
    },
    u_u_email:{
        type:String,
        required:[true,"Email is Required"],
        unique:true,
        validate:validator.isEmail
    },

    u_addr:String,

    u_u_contact:{
        type:String,
        validate:validator.isMobilePhone
    }
})

export default  mongoose.model("users",userSchema)
