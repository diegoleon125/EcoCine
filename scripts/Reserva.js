import { PeliculaDAO } from "./PeliculaDAO.js"
export class Reserva {
    constructor(){
        //Actualizar para todas las páginas
        window.addEventListener('storage', (event) => {
            if (!event.key) return;
            switch (event.key){
                case 'dulceria':
                    this.updateDulceria(); break;
                case 'cine':
                    this.updateCine(); break;
                case 'reserva':
                    this.updateReserva(); break;
                case 'asientos':
                    this.updateAsientos(); break;
            }
        });
    }

    static async setPelicula(pelicula_id){
        const peliculaValida = await PeliculaDAO.getPelicula(pelicula_id);
        if (peliculaValida === null) return false;
        
        let reserva = JSON.parse(localStorage.getItem('reserva'));
        if (reserva === null) reserva = {};
        reserva.movie_id = pelicula_id;
        localStorage.setItem('reserva', JSON.stringify(reserva));
        return true;
    }
    #cargarReserva(){
        const saved = JSON.parse(localStorage.getItem("reserva"));
        if (saved){
            this.movie_id = saved.movie_id;
            this.hor_id = saved.hor_id;
            this.seats_ids = saved.seats_ids;
            this.combos_ids = saved.combos_ids;
        } else{
            this.restaurar();
        }
    }
    restaurar(){
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
        this.restaurar();
        localStorage.removeItem("reserva");
    }

    is_empty(){
        return this.seats_ids.length == 0 && this.combos_ids.length == 0;
    }
}
