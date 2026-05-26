document.addEventListener("DOMContentLoaded", () => {
    //API QR (api.qrsever.com)
   const qr = document.querySelector("#qr");
   const compra_id = document.querySelector("#compra-id")
   let data = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
   data = Math.random().toString(36).substring(2,9).toUpperCase(); 
   compra_id.innerHTML = data;
   qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data;
});