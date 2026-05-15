class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <div id="page-overlay"></div>
        <nav id="page-menu">
            <ul>
                <li><a class="page-a" href="/EcoCine/peliculas">Películas</a></li>
                <li><a class="page-a" href="/EcoCine/cines">Cines</a></li>
                <li><a class="page-a" href="/EcoCine/dulceria/combos">Dulcería</a></li>
                <li><a class="page-a" href="/EcoCine/promociones">Promociones</a></li>
                <li><a class="page-a" href="/EcoCine/contactanos">Contáctanos</a></li>
            </ul>
        </nav>
        <div id="header-space"></div>
        <header>
            <button id="side-menu" class="page-btn header-btn icon">
                &#9776;
            </button>
            <a class="page-a" href="/EcoCine">
                <img id="title-menu" src="/EcoCine/src/logo.png" alt="titulo">
            </a>
            <div id="page-dropdown">
                <button id="cart" class="page-btn header-btn icon">
                    <i class="fi fi-rr-shopping-cart"></i>
                </button>
                <ul>
                    <li>
                        <button id="cart-clear" class="page-btn">Vaciar carrito</button>
                    </li>
                    <li>
                        <button id="cart-pay" class="page-btn bg-2">Procesar compra</button>
                    </li>
                </ul>
                <h3 id="cart-output" class="text-outline"></h3>
            </div>
        </header>
        <a id="btn-return-top" class="page-a icon bg-2" href="#">
            <i class="fi fi-br-arrow-up"></i>
        </a>
        `;
    }
}
class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <footer>
            <section class="flex-section">
                <section>
                    <img src="/EcoCine/src/logo.png" alt="logo" class="logo">
                    <p>En Ecocine creemos que el entretenimiento y el cuidado del planeta pueden ir de la mano.</p>
                    <nav>
                        <a href="https://www.instagram.com/cineplanetoficial/" target="_blank" class="icon">
                            <img src="" alt="ig">
                        </a>
                        <a href="https://www.facebook.com/cinestarbenavides?locale=es_LA" target="_blank" class="icon">
                            <img src="" alt="fb">
                        </a>
                        <a href="https://www.tiktok.com/@cinepolis.pe" target="_blank" class="icon">
                            <img src="" alt="tk">
                        </a>
                        <a href="https://www.youtube.com/@CinemarkPeru" target="_blank" class="icon">
                            <img src="" alt="yt">
                        </a>
                    </nav>
                </section>
                <section>
                    <h3>Enlaces rápidos</h3>
                    <ul id="footer-list">
                        <li>
                            <a href="/EcoCine/">Inicio</a>
                        </li>
                        <li>
                            <a href="/EcoCine/peliculas">Películas</a>
                        </li>
                        <li>
                            <a href="/EcoCine/cines">Cines</a>
                        </li>
                        <li>
                            <a href="/EcoCine/dulceria/combos">Dulcería</a>
                        </li>
                        <li>
                            <a href="/EcoCine/promociones">Promociones</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>Acerca de nosotros</h3>
                    <p>Somos el primer cine comprometido 100% con el medio ambiente. Salas bien cuidadas, compras sostenibles y experiencias inolvidables.</p>
                    <a href="/EcoCine/acerca-de-nosotros" class="page-a page-btn bg-1">Conócenos más &rightarrow;</a>
                </section>
            </section>
            <section>
                <span>&copy; 2026 EcoCine. Todos los derechos reservados</span>
                <span>Hecho con &#9825; por un mundo mejor</span>
            </section>
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
        /* if (r.is_empty()){
            cart_output.innerHTML = "Debe añadir compras al carrito primero!";
            cart_output.classList.add("fade-out");
        } else {
            */
            window.location.href = "/EcoCine/pagar";
        //}
    };
    cart_output.addEventListener("animationend", () => {
        cart_output.innerHTML = "";
        cart_output.classList.remove("fade-out");
    });
});