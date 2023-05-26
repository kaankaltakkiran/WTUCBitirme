import Product from "../models/productModel.js";
//İndex Sayfası
const getIndexPage= async(req,res)=>{
 try {
   //Ana sayfaya ürünleri yollama
   const products=await Product.find({});
   res.status(200).render('index',{
     products,
     link:'index',
   });
 
 } catch (error) {
     res.status(500).json({
         succeded:false,
         error,
     });
 }
 
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
   try {
      //Ürünler ürünleri yollama
      const products=await Product.find({});
      res.status(200).render('shop',{
        products,
        link:'shop',
      });
    
    } catch (error) {
        res.status(500).json({
            succeded:false,
            error,
        });
    }
   }
//Product Sayfası
/* const getProductPage= async(req,res)=>{
res.render('product',{
   link:'shop',
});
} */
//Contact Sayfası
const getContactPage= async(req,res)=>{
   res.render('contact',{
      link:'contact',
   });
   }

     //Logout Sayfası
const getLogout=(req,res)=>{
   //Cookideki Tokeni Yenliyor 1 Saniyede 
  res.cookie('jwt',' ',{
   maxAge:1,
  });
  res.redirect("/");
};

//404 Sayfası
const get404Page= async(req,res)=>{
   res.render('404');
   }
   //Payment Page
   const getPaymentPage=async (req,res)=>{
      res.render('payment',{
         link:'payment',
      });
   }
//Yeni sayfalar olduğunda üsteki gibi oluşturacağız.
const getAProduct=async(req,res)=>{
   try {
      //Tekil Ve Çoğul ürünler Listeleme
     const product=await Product.findById({_id:req.params.id});
     const products=await Product.find({_id:{$ne:req.params.id}});
     res.status(200).render('product',{
       product,
        link:'shop',
        products, 
     });
   
   } catch (error) {
       res.status(500).json({
           succeded:false,
           error,
       });
   }
   }
//Başkta Yerde Kullanmak İçin Export
 export {getIndexPage,getLoginPage,getRegisterPage,getShopPage,getAProduct,getContactPage,getLogout,get404Page,getPaymentPage};    