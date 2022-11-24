
//İndex Sayfası
const getIndexPage= async(req,res)=>{
 res.render('index',{
   link:'index',
 });
}
//Login Sayfası
const getLoginPage= async(req,res)=>{
    res.render('login',{
    link:'login',
    });
   }

//Register Sayfası
const getRegisterPage= async(req,res)=>{
    res.render('register',{
      link:'login',
    });
   }
//Shop Sayfası
const getShopPage= async(req,res)=>{
res.render('shop',{
   link:'shop',
});
   }
//Product Sayfası
const getProductPage= async(req,res)=>{
res.render('product',{
   link:'shop',
});
}
//Contact Sayfası
const getContactPage= async(req,res)=>{
   res.render('contact',{
      link:'contact',
   });
   }
//Yeni sayfalar olduğunda üsteki gibi oluşturacağız.

//Başkta Yerde Kullanmak İçin Export
 export {getIndexPage,getLoginPage,getRegisterPage,getShopPage,getProductPage,getContactPage};    