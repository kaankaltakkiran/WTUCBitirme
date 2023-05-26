
//NodeJs Ve Sunucu İşlemleri İçin
import express from "express";
import * as productController from "../controllers/productController.js";

//Yönledirme
const router=express.Router();
//Ürün Veritabını Yönlendirme post isteği
router.route("/").post(productController.createProduct);
/* 
router.route("/").get(productController.getAllProducts); */

//Routerı Export Ettim
export default router;