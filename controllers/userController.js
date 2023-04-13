//UserModel İmport
import User from "../models/userModel.js";
//Şifre İçin Kriptolama
import bcrypt from "bcrypt";
//Token İçin
import jwt from "jsonwebtoken";

const createUser= async(req,res)=>{
    try {
       
const user=await User.create(req.body);

res.redirect('/login');

    } catch (error) {
    res.status(500).json({
        succeded:false,
        error,
    })
  } 
};

//Login Kısmı
//Async Yapıyoruz Çünkü Beklemio
const loginUser= async(req,res)=>{
  const {email,password}=req.body;
  try{
//Username Ve Password Karşılaştırma Yapma Yeri
//Username Ve Password Aldım
const {email,password}=req.body;
//Veritabanından Kullanıcı Bulma
//Usernamee Göre Bulma(uniqe)
//Await Beklemesi Lazım Bulmaması İçin
const user= await User.findOne({email:email});
//Şifrelerin Eşit olup Olmadığı Durum İçin
let same=false;

if(user){   
    //Burdaki Password İle Veritabanındaki Passwordü Karşılaştırma
    //Compare Karşılaştırma Yapıo
    //1.Parametre Formdaki Password,2.Veritabanındaki
    same=await bcrypt.compare(password,user.password);
    //Else Kullanıcı Yoksa
}else{
    //Return Sebebi Kullanıcı Yoksa Şifrelerin Aynı Olup Olmaması Önemli Değil.
   
    return res.redirect('/login');
} 
//Passwordler Eşlendiyse İfe Girer
if(same){

    //Token Oluşturma
    const token=createToken(user._id)
    //Cokie Kaydetme
    res.cookie("jwt",token,{
       //Http Sayfalarda Kullanma
    httpOnly:true,
    //Bir Gün
    maxAge:1000*60*60*24,
    });
    //Token Eşleştiyse
   res.redirect('/');
   
}else{
    /* res.status(401).json({
        succeded:false,
        error:"Password Eşleşmedi.",
      }); */
      res.redirect('/login');
} 
    } catch (error) {
        res.status(500).json({
          succeded:false,
          error,
        });
    }
};

const createToken=(userId)=>{
  //Token Oluşturma
  //1.İd Alcak 2. Private Key (Env Dosyasında)
  return jwt.sign({userId},process.env.JWT_SECRET,{
  //Token Sonlanma(1Day)
  expiresIn:'1d',
  });
};



export {createUser,loginUser};