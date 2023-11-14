import mongoose from "mongoose"

const orderItemSchema = new mongoose.schema({
  productId : {
    type : mongoose.schema.type.objectId, 
    ref : "Product"
  },
  quantity :{
    type : Number, 
    required : true
  }
})

const orderSchema = new mongoose.schema({
  ordrPrice:{
    type : Number,
    required : true
  },
  customer :{
  type : mongoose.schema.type.object.objectId,
  ref : "user"
  },
  orderItem : {
    type : [orderItemSchema]
  }, 
  order:{
    type : string, 
    required : true
  },
  status :{
    type : true,
    enum : ["pending" , "cancelled" , "delivered" ],
    default : "pending"
  }

}, {timeStamp : true})

export const order = mongoos.model("Order" ,orderSchema )