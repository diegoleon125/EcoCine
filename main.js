class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <header>
            <button id="side-menu" class="page-btn">|||</button>
            <a class="page-a" href="/">Titulo interesante</a>
            <button id="cart" class="page-btn">cart</button>
        </header>
        <div id="page-overlay"></div>
        <aside id="page-menu">
            <ul class="page-list">
                <li>
                    <a class="page-a" href="/peliculas">Películas</a>
                </li>
                <li>
                    <a class="page-a" href="/cines">Cines</a>
                </li>
                <li>
                    <a class="page-a" href="/dulceria">Dulcería</a>
                </li>
                <li>
                    <a class="page-a" href="/promociones">Promociones</a>
                </li>
                <li>
                    <a class="page-a" href="/contactanos">Contáctanos</a>
                </li>
            </ul>
        </aside>
        `;

        const btn_menu = this.querySelector("#side-menu");
        const menu = this.querySelector("#page-menu");
        const overlay = this.querySelector("#page-overlay");
        const btn_cart = this.querySelector("#cart");

        btn_menu.onclick = () => {
            menu.classList.toggle("active");
            overlay.classList.toggle("active");
        };
        overlay.onclick = () => {
            menu.classList.toggle("active");
            overlay.classList.toggle("active");
        };
    }
}
class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <footer>
            <a class="page-a" href="/acerca-de-nosotros">Acerca de nosotros</a>
            Pie de pagina
            <a class="page-a" href="/contactanos">Contáctanos</a>
        </footer>
        `;
    }
}

customElements.define('custom-header',MyHeader);
customElements.define('custom-footer',MyFooter);
