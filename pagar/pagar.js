import {Reserva} from "/EcoCine/scripts/Reserva.js";
const r = new Reserva();
/*
if (r.is_empty()){
    window.location.href = "/EcoCine/";
}
*/
document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector("#table-cartlist");
    const thead = list.querySelector("thead");
    
    const pagar = document.querySelector("#pagar");
    pagar.onclick = () => {
        window.location.href = "/Ecocine/pagar/confirmado";
    };
})