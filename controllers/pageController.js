//Ürünler için Model İmport
import Product from "../models/productModel.js";
//Mail için İmport
import nodemailer from "nodemailer";
//UserModel İmport
import User from "../models/userModel.js";

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
    emailPasswordError:'',
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
     const user= await User.find({});
     res.status(200).render('product',{
       product,
        link:'shop',
        products,
        user, 
     });
   
   } catch (error) {
       res.status(500).json({
           succeded:false,
           error,
       });
   }
   }
   //Mail Gönderme
   const sendMail=async(req,res)=>{
    //Mail Template
      const htmlTemplate = `
      <!doctype html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>Simple Transactional Email</title>
          <style>
            /* -------------------------------------
                GLOBAL RESETS
            ------------------------------------- */
            
            /*All the styling goes here*/
            
            img {
              border: none;
              -ms-interpolation-mode: bicubic;
              max-width: 100%; 
            }
      
            body {
              background-color: #f6f6f6;
              font-family: sans-serif;
              -webkit-font-smoothing: antialiased;
              font-size: 14px;
              line-height: 1.4;
              margin: 0;
              padding: 0;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%; 
            }
      
            table {
              border-collapse: separate;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              width: 100%; }
              table td {
                font-family: sans-serif;
                font-size: 14px;
                vertical-align: top; 
            }
      
            /* -------------------------------------
                BODY & CONTAINER
            ------------------------------------- */
      
            .body {
              background-color: #f6f6f6;
              width: 100%; 
            }
      
            /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
            .container {
              display: block;
              margin: 0 auto !important;
              /* makes it centered */
              max-width: 580px;
              padding: 10px;
              width: 580px; 
            }
      
            /* This should also be a block element, so that it will fill 100% of the .container */
            .content {
              box-sizing: border-box;
              display: block;
              margin: 0 auto;
              max-width: 580px;
              padding: 10px; 
            }
      
            /* -------------------------------------
                HEADER, FOOTER, MAIN
            ------------------------------------- */
            .main {
              background: #ffffff;
              border-radius: 3px;
              width: 100%; 
            }
      
            .wrapper {
              box-sizing: border-box;
              padding: 20px; 
            }
            .content-block {
              padding-bottom: 10px;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
            <tr>
              <td>&nbsp;</td>
              <td class="container">
                <div class="content">
      
                  <!-- START CENTERED WHITE CONTAINER -->
                  <table role="presentation" class="main">
      
                    <!-- START MAIN CONTENT AREA -->
                    <tr>
                      <td class="wrapper">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td>
                              <p>Name: ${req.body.name}</p>
                              <p>Surname: ${req.body.surname}</p>
                              <p>Email: ${req.body.email}</p>
                              <p>PhoneNumber: ${req.body.phonenumber}</p>
                              <p>Comment: ${req.body.comment}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
      
                  <!-- END MAIN CONTENT AREA -->
                  </table>
                  <!-- END CENTERED WHITE CONTAINER -->
                </div>
              </td>
              <td>&nbsp;</td>
            </tr>
          </table>
        </body>
      </html>
      `;
    
      try {
        // Mail Ayarları
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true, // ture port 465,false 587
          auth: {
            user: process.env.NODE_MAIL, //mail adresi env dosyasında tanımlı
            pass: process.env.NODE_PASS, //mail şifresi env dosyasında tanımlı
          },
        });
    
        // gönderilen mail ayarları
        await transporter.sendMail({
          to: 'wtucbitirme43@gmail.com', 
          subject: `MAIL FROM ${req.body.email}`, 
          html: htmlTemplate, 
        });
        //hata yoksa true dön varsa false dön
        res.status(200).json({ succeeded: true });
      } catch (error) {
        res.status(500).json({
          succeeded: false,
          error,
        });
      }
    };

//Başkta Yerde Kullanmak İçin Export
 export {getIndexPage,getLoginPage,getRegisterPage,getShopPage,getAProduct,getContactPage,getLogout,get404Page,getPaymentPage,sendMail};    