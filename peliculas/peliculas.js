import { Reserva } from "/scripts/Reserva.js";

function setPelicula(id){
    const r = new Reserva();
    r.movie_id = id;
    r.seats_ids = [];
    r.guardarReserva();
    window.location.href = "peliculas/pelicula";
}
window.setPelicula = setPelicula;