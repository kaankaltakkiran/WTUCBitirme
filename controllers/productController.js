//Ürün Modeli İmport
import Product from "../models/productModel.js";

//Thunder Client ile veritabanına ürün ekleme
const createProduct= async(req,res)=>{
    console.log(req.body);
    try {
        //Ürün oluşturma
        const product=await Product.create(req.body);
        res.status(201).json({
            succeded:true,
            product,
        });
    } catch (error) {
        res.status(500).json({
            succeded:false,
            error,
        });
    }
}

//?Şimdilik Kalsın deneme için
/* const getAllProducts=async(req,res)=>{
try {
  const products=await Product.find({});
  res.status(200).render('shop',{
    products
  });

} catch (error) {
    res.status(500).json({
        succeded:false,
        error,
    });
}
}
 */


 

export{createProduct}