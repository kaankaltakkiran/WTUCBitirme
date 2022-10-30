//!App.js e bunlar eklencek
//Çevre Değişkenleri İçin(.env)
import dotenv from "dotenv"; 
//Veritabanı Bağlantısı için
import conn from "./db.js";

/* Bunlar exprexten üste olcak */

//Çevre Değişkenleri İçin(.env) Çağırma
dotenv.config();
//Veritabanı Bağlantısı için
conn(); 