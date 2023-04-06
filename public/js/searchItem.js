const searchItem=()=>{
    const searchbox=document.getElementById("search-item").value.toUpperCase();
    const storeitems=document.getElementById("product-list");
    const product=document.querySelectorAll(".pro");
    const productname=storeitems.getElementsByTagName("h5");

    for(var i=0;i<productname.length;i++){
        let match=product[i].getElementsByTagName('h5')[0];

        if(match){
            let textvalue=match.textContent || match.innerHTML;
            console.log(textvalue);

            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
        }
    }

}