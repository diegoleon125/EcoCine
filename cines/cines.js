import {Reserva} from "/EcoCine/scripts/Reserva.js";


function setCinema(cinema){
    localStorage.setItem("cinema",cinema);
    const r = new Reserva();
    if (r.movie_id){
        window.location.href = "/EcoCine/peliculas/pelicula";
    } else {
        window.location.href = "/EcoCine/peliculas";
    }
};
function clearCinema(){
    localStorage.removeItem("cinema");
    console.log("cinema deleted");
}
window.setCinema = setCinema;
window.clearCinema = clearCinema;