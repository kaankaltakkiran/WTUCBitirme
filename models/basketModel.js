
import mongoose from "mongoose";


const {Schema} = mongoose;
const basketSchema = new Schema({
    userId:{
        type:String,
        //Zorunlu olması
        required:true,
        //unique olması lazım mı ?????????
        unique:true,
    },
    productList:{
        type:String,
        required:true,
        //unique olması lazım mı ?????????
        unique:true,
    },
    },
    {
        //CreatedAt ve UpdateAt Ekliyor
        timestamps:true,
    }
    );
    
    
    //Başka Yerlerde Modeli Kullanmak İçin Değişkene Atama
    const Basket=mongoose.model("Basket",basketSchema);
    //Modeli Export Etme
    export default Basket;