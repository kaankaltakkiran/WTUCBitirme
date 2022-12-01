import mongoose from "mongoose";
//Şifre İçin Kriptolama
import bcrypt from "bcrypt";


//Sechema Oluşturma
//MongoDb otomatik id atıyor id vermemize gerek yok sanırım ??????????
const {Schema}=mongoose;
const userSchema= new Schema({
name:{
    type:String,
    //Zorunlu olması
    required:true,
    //Bu Çok gerekli değil ama tartışalım ?????????????????????
    lowercase:true,
},
lastName:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    //Tekil olması
    unique:true,
},
phone:{
    //String Yerine Daha mantıklı gibi????????
    type:Number,
    required:true,
    unique:true,
},
birthday:{
    //String Yerine Daha mantıklı gibi????????
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
    unique:true,
},
},
{
    //CreatedAt ve UpdateAt Ekliyor
    timestamps:true,
}
);
//!Bu sonra da eklenir sanırım şimdilik gerek yok
//Şifre İçin Kriptolama
 userSchema.pre("save",function(next){
    const user=this;
    bcrypt.hash(user.password,10,(err,hash)=>{
        user.password=hash;
        next();
    });
    }); 

//Başka Yerlerde Modeli Kullanmak İçin Değişkene Atama
const User=mongoose.model("User",userSchema);
//Modeli Export Etme
export default User;