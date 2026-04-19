export class Reserva {
    constructor(){
        this.cargarReserva();
    }

    cargarReserva(){
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
    default(){
        this.movie_id = null;
        this.hor_id = null;
        this.seats_ids = [];
        this.combos_ids = [];
    }

    is_empty(){
        return this.seats_ids.length == 0 && this.combos_ids.length == 0;
    }
}