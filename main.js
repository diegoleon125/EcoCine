class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <div id="page-overlay"></div>
        <aside id="page-menu">
            <ul>
                <li>
                    <a class="page-a" href="/EcoCine/peliculas">Películas</a>
                </li>
                <li>
                    <a class="page-a" href="/EcoCine/cines">Cines</a>
                </li>
                <li>
                    <a class="page-a" href="/EcoCine/dulceria">Dulcería</a>
                </li>
                <li>
                    <a class="page-a" href="/EcoCine/promociones">Promociones</a>
                </li>
                <li>
                    <a class="page-a" href="/EcoCine/contactanos">Contáctanos</a>
                </li>
            </ul>
        </aside>
        <div id="header-space"></div>
        <header>
            <button id="side-menu" class="page-btn icon">
                &#9776;
            </button>
            <a id="title-menu" class="page-a" href="/EcoCine">
                <span>Eco</span>Cine
            </a>
            <div id="page-dropdown">
                <button id="cart" class="page-btn icon">
                    <i class="fi fi-rr-shopping-cart"></i>
                </button>
                <ul>
                    <li>
                        <button id="cart-clear" class="page-a">Vaciar carrito</button>
                    </li>
                    <li>
                        <button id="cart-pay" class="page-a page-a-btn">Procesar compra</button>
                    </li>
                </ul>
                <h3 id="cart-output" class="text-outline"></h3>
            </div>
        </header>
        `;
    }
}
class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <footer>
            <a class="page-a" href="/EcoCine/acerca-de-nosotros">Acerca de nosotros</a>
            <a class="page-a" href="/EcoCine/contactanos">Contáctanos</a>
        </footer>
        `;
    }
}

customElements.define('custom-header',MyHeader);
customElements.define('custom-footer',MyFooter);

import {Reserva} from "/EcoCine/scripts/Reserva.js";
document.addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector("#side-menu");
    const menu = document.querySelector("#page-menu");
    const overlay = document.querySelector("#page-overlay");
    btn_menu.onclick = () => {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    };
    overlay.onclick = () => {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    };

    const cart_clear = document.querySelector("#cart-clear");
    const cart_pay = document.querySelector("#cart-pay");
    const cart_output = document.querySelector("#cart-output");
    const r = new Reserva();
    cart_clear.onclick = () => {
        r.borrar();
        cart_output.innerHTML = "Borrado!";
        cart_output.classList.add("fade-out");
    };
    cart_pay.onclick = () => {
        if (r.is_empty()){
            cart_output.innerHTML = "Debe añadir compras al carrito primero!";
            cart_output.classList.add("fade-out");
        } else {
            window.location.href = "/EcoCine/pagar";
        }
    };
    cart_output.addEventListener("animationend", () => {
        cart_output.innerHTML = "";
        cart_output.classList.remove("fade-out");
    });
});