/*
const cine = localStorage.getItem("cinema");
if (cine == null){
    window.location.href = "cines";
}
*/
let tbody;

document.addEventListener("DOMContentLoaded", () => {
    const hor = document.querySelector("#table-hor");
    const dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    const thead = hor.querySelector("thead");
    let tr = thead.insertRow();
    for (let f = 0; f < 7; f++){
        const th = document.createElement("th");
        th.innerHTML = dias[f];
        tr.appendChild(th);

    }
    tbody = hor.querySelector("tbody");
    for(let f = 0; f < 6; f++){
        let fila = tbody.insertRow();
        for(let c = 0; c < 7; c++){
            let columna = fila.insertCell();
        }
    }
    añadirHorario(0,12,14);
});

function añadirHorario(columna,hor_inicio, hor_final){
    const rows = tbody.rows;
    const a = document.createElement("a");
    a.classList.add("page-a");
    a.classList.add("bg-1");
    a.classList.add("page-btn");
    a.innerHTML = hor_inicio + "-" + hor_final;
    a.href= "peliculas/pelicula/boleteria";
    for(let i = 0; i <= tbody.rows.length; i++){
        let celda = rows[i].cells[columna];
        if(celda.innerHTML.trim() === ""){
            celda.appendChild(a);
            return;
        }
    }
}