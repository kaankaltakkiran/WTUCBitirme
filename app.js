import  express  from "express";

//Çevre Değişkenleri İçin(.env)
import dotenv from "dotenv"; 
//Veritabanı Bağlantısı için
import conn from "./db.js";
//Sayfa Yönlendirme İçin
import pageRoute from "./routes/pageRoute.js";

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
app.use('/public', express.static('public'));


 //Route Bölümü
//
app.use("/",pageRoute);

app.listen(port, () => {
   console.log(`Server Şu Portta Çalışıyor: ${port}`);
});

 /*app.listen(port,hostname, () => {
    console.log(`server çalişiyor,http://${hostname}:${port}/`)
 })*/
  