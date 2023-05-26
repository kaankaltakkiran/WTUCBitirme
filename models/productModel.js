//Veritabanı İçin
import mongoose from "mongoose";
//Schema Oluşturma
const {Schema}=mongoose;
const productSchema= new Schema({
productName:{
    type:String,
    //Zorunlu olması
    required:true,
    //Boşuk siler
    trim:true,
},
productPrice:{
    type:Number,
    required:true,
},
/* productPhoto:{//multer fileUpload server
    //Bura İçin read meyi okuyun
    type:String,
    required:true,
}, */
productExplanation:{
    type:String,
    trim:true,
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
//Ürün Resimleri
productImageUrl1:{
    type:String,
    required:true,
},
productImageUrl2:{
    type:String,
    required:true,
},
productImageUrl3:{
    type:String,
    required:true,
},
productImageUrl4:{
    type:String,
    required:true,
},
productImageUrl5:{
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
