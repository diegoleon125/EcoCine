export class Reserva {
    constructor(){
        //Actualizar para todas las páginas
        window.addEventListener('storage', (event) => {
            if (!event.key) return;
            switch (event.key){
                case 'cine':
                    this.updateCine(); break;
                case 'dulceria':
                    this.updateDulceria(); break;
                case 'asientos':
                    this.updateAsientos(); break;
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