
//NodeJs Ve Sunucu İşlemleri İçin
import express from "express";
//PageControllerdaki İşlemler İçin
import * as pageController from "../controllers/pageController.js";
//Yönledirme
const router=express.Router();
//Eğer / İseteği Gelirse PageControllerdaki GetIndexPage E git
router.route("/").get(pageController.getIndexPage);
//Eğer /login İseteği Gelirse PageControllerdaki GetIndexPage E git
router.route("/login").get(pageController.getLoginPage);
//Eğer /register İseteği Gelirse PageControllerdaki GetIndexPage E git
router.route("/register").get(pageController.getRegisterPage);
//Eğer /shop İseteği Gelirse PageControllerdaki GetIndexPage E git
router.route("/shop").get(pageController.getShopPage);
//Eğer /product İseteği Gelirse PageControllerdaki GetIndexPage E git
router.route("/product").get(pageController.getProductPage);
//Eğer /contact İseteği Gelirse PageControllerdaki GetIndexPage E git
router.route("/contact").get(pageController.getContactPage);
//Başka sayfalar için üsteki gibi yönlendirme eklenecek

//Routerı Export Ettim
export default router;