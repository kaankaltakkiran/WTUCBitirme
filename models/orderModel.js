import mongoose from "mongoose";



const {Schema} = mongoose;

const orderSchema = new Schema ({
    orderId:{
        type:String,
        //Zorunlu olması
        required:true,
        //unique olması lazım mı ?????????
        unique:true,
    },
    userId:{
        type:String,
        required:true,
         //unique olması lazım mı ?????????
         unique:false,
    },
    orderTotal:{
        type:Number,
        required:true,
    },
    productList:{
        //Array?????????????????????
        type:String,
        required:true,
    },
    },
    {
        //CreatedAt ve UpdateAt Ekliyor
        timestamps:true,
    }
    );
    
    
    //Başka Yerlerde Modeli Kullanmak İçin Değişkene Atama
    const Order=mongoose.model("Order",orderSchema);
    //Modeli Export Etme
    export default Order;
