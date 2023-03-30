import  express  from "express";

//Çevre Değişkenleri İçin(.env)
import dotenv from "dotenv"; 
//Veritabanı Bağlantısı için
import conn from "./db.js";
//Sayfa Yönlendirme İçin
import pageRoute from "./routes/pageRoute.js";
//UserRoute
import UserRoute from "./routes/userRoute.js";
//Sayfa  Json
import cookieParser from "cookie-parser";
//JsonWebToken İçin
import {checkUser} from "./middlewares/authMiddleware.js";

//Çevre Değişkenleri İçin(.env) Çağırma
dotenv.config();
//Veritabanı Bağlantısı için
conn(); 

const app=express();
const port=process.env.PORT;
const hostname=process.env.HOSTNAME;

//Html De JavaScript Kodu Yazmak İçin Ejs
app.set('view engine','ejs');

//Static Dosyalara Ulaşmak İçin
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()); 

 //Route Bölümü
//



//Tüm Get Methotlarında CheckUser Kontrol Et
app.use("*",checkUser);
app.use("/",pageRoute);
app.use("/users",UserRoute);

//404 Hatası render
 app.get('*', function(req, res){
   res.status(404).render('404');
 });
  
 app.listen(port, () => {
    console.log(`Server Şu Portta Çalışıyor: ${port}`);
 }); 