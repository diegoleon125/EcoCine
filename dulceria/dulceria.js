import {Reserva} from "/EcoCine/scripts/Reserva.js";

function toggleProduct(btn, product_id){
    btn.classList.toggle("active");
    const r = new Reserva();
    if (btn.classList.contains("active")){
        r.combos_ids.push(product_id);
        console.log(`id ${product_id} añadido`);
    } else {
        r.combos_ids = r.combos_ids.filter(id => id !== product_id);
        console.log(`id ${product_id} eliminado`);
    }
    r.guardarReserva();
};
window.toggleProduct = toggleProduct;