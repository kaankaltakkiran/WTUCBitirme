//Form elementleri al
const form = document.querySelector('form')
const sendMessage = document.querySelector('#sendMessage')
//Listener methodu ile form submit edildiğinde çalışacak fonksiyon
form.addEventListener("submit", async (e) => {
   e.preventDefault();
    //form değerleri
   const name = form.name.value
   const surname = form.surname.value
   const email = form.email.value
   const phonenumber = form.phonenumber.value
   const comment = form.comment.value

   try {
      //fetch ile değerleri alma
      const res = await fetch('/contact', {
         method: "POST",
         body: JSON.stringify({ name, surname, email,phonenumber,comment }),
         headers: { "Content-Type": "application/json" }
      })
      //json tipinde data al
      const data = await res.json();

      console.log("DATA", data)

      if (data.succeeded) {
       //Onay Mesajı
         sendMessage.textContent = "Mesaj Başarılı Bir şekile Gönderildi"
         sendMessage.style.display = "block"
         //4 saniye sonra form elemanlarını temizle
         setTimeout(() => {
            sendMessage.style.display = "none"
            form.name.value = ""
            form.surname.value = ""
            form.email.value = ""
            form.phonenumber.value = ""
            form.comment.value = ""

         }, 4000)

      }


   } catch (err) {
      console.log("ERR::", err)
   }
})