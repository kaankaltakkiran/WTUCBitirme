//Veritabanı İçin
import mongoose from "mongoose";

//Sechema Oluşturma
//MongoDb otomatik id atıyor id vermemize gerek yok sanırım ??????????
const {Schema}=mongoose;
const productSchema= new Schema({
productName:{
    type:String,
    //Zorunlu olması
    required:true,
    //Bu Çok gerekli değil ama tartışalım ?????????????????????
    lowercase:true,
},
productPrice:{
    type:Number,
    required:true,
},
productPhoto:{//multer fileUpload server
    //Bura İçin read meyi okuyun
    type:String,
    required:true,
},
productExplanation:{
    type:String,
    required:true,   
},
productCategory:{
    type:String,
    required:true,
},
productComment:{
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
const Product=mongoose.model("Product",productSchema);
//Modeli Export Etme
export default Product;
