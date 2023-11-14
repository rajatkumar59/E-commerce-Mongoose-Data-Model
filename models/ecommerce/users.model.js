import mongoose from "mongoose"
 

const userSchema = new mongoose.schema({
  username : {
    type : string, 
    required : true, 
    unique : true,
    lowercase : true
  },
  password :{
    type : string, 
    required : true
  }
} , {timestamps : true})

export const user = mongoose.model("user" , userschema)