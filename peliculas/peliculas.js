import {Reserva} from "/EcoCine/scripts/Reserva.js";

function setPelicula(id){
    const r = new Reserva();
    r.movie_id = id;
    r.seats_ids = [];
    r.guardarReserva();
    window.location.href = "/EcoCine/peliculas/pelicula";
}
window.setPelicula = setPelicula;