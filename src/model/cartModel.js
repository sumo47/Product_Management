const mongoose = require("mongoose");
const ObjectId=mongoose.Schema.Types.ObjectId
const cartSchema = new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:'user',
        required:true,
        unique:true
    },
    items:[{
        productId:{
            type:ObjectId,
            ref:"product",
            required:true
        },
        quantity:{
            type:Number,
            required:true,
            minlength:1
        } 
 
    }],
    totalPrice:{
        type:Number,
        required:true,

    },
    totalItems:{
        type:Number,
        required:true,
    },

},{timestamps:true})

module.exports=mongoose.model("cart",cartSchema)

//{
//     userId: {ObjectId, refs to User, mandatory, unique},
//     items: [{
//       productId: {ObjectId, refs to Product model, mandatory},
//       quantity: {number, mandatory, min 1}
//     }],
//     totalPrice: {number, mandatory, comment: "Holds total price of all the items in the cart"},
//     totalItems: {number, mandatory, comment: "Holds total number of items in the cart"},
//     createdAt: {timestamp},
//     updatedAt: {timestamp},
//   }
//   ```