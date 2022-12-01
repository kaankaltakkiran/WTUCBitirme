//UserModel İmport
import User from "../models/userModel.js";
//Şifre İçin Kriptolama
import bcrypt from "bcrypt";

const createUser= async(req,res)=>{
    try {
       
const user=await User.create(req.body);

 res.status(201).json({
    succeded:true,
    user,
 });
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



export {createUser,loginUser};