
//NodeJs Ve Sunucu İşlemleri İçin
import express from "express";
//PageControllerdaki İşlemler İçin
import * as pageController from "../controllers/pageController.js";
//Yönledirme
const router=express.Router();
//Eğer / İseteği Gelirse PageControllerdaki GetIndexPage E git
router.route("/").get(pageController.getIndexPage);

//Başka sayfalar için üsteki gibi yönlendirme eklenecek

//Routerı Export Ettim
export default router;