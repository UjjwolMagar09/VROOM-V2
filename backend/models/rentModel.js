import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";

const rentSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rentItems:[
    {
      name: {type: String,required:true},
      qty: {type: Number,required:true},
      image: {type: String,required:true},
      price: {type: Number,required:true},
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    }
  ],
  shippingAddress:{
    address: {type: String,required:true},
    city: {type: String,required:true},
    postalCode: {type: String,required:true},
    country: {type: String,required:true},
  },
  paymentMethod:{
    type: String,
    required: true,
  },
  paymentResult:{
    id:{type:String},
    status:{type:String},
    update_time:{type:String},
    email_address:{type:String},
  },
  itemsPrice:{
    type:Number,
    required:true,
    default: 0.0,
  },
  taxPrice:{
    type: Number,
    required: true,
    default:0.0,
  },
  ShippingPrice:{
    type:Number,
    required: true,
    default:0.0,
  },
  totalPrice:{
    type: Number,
    required: true,
    default: 0.0,
  },
  ispaid:{
    type:Boolean,
    requried: true,
    default:0.0,
  },
  paidAt:{
    type:Date,
  },
  isDelivered:{
    type:Boolean,
    required:true,
    default:false,
  },
  deliveredAt:{
    type: Date, 
  },
},{
  timeStamp:true,
});

const Rent = mongoose.model('Rent', rentSchema);
export default Rent;

