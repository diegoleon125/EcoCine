export class Reserva {
    //Clase singleton para tener 1 instancia de reserva local
    constructor(){
        this.#cargarReserva();
        window.addEventListener("storage", (event) => {
            if (event.key === "reserva"){
                if (event.newValue) {
                    this.#cargarReserva();
                }
            } 
        });
    }

    #cargarReserva(){
        const saved = JSON.parse(localStorage.getItem("reserva"));
        if (saved){
            this.movie_id = saved.movie_id;
            this.hor_id = saved.hor_id;
            this.seats_ids = saved.seats_ids;
            this.combos_ids = saved.combos_ids;
        } else{
            this.default();
        }
    }
    default(){
        this.movie_id = null;
        this.hor_id = null;
        this.seats_ids = [];
        this.combos_ids = [];
    }

    guardarReserva(){
        localStorage.setItem("reserva", JSON.stringify(this));
    }
    borrarPelicula(){
        this.movie_id = null;
        this.seats_ids = [];
        this.save();
    }
    borrar(){
        this.default();
        localStorage.removeItem("reserva");
    }

    is_empty(){
        return this.seats_ids.length == 0 && this.combos_ids.length == 0;
    }
}