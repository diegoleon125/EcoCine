const cine = localStorage.getItem("cinema");
if (cine == null){
    window.location.href = "/EcoCine/cines";
}

let tbody;

document.addEventListener("DOMContentLoaded", () => {
    const hor = document.querySelector("#table-hor");
    const dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    const thead = hor.querySelector("thead");
    let tr = thead.insertRow();
    for (let f = 0; f < 7; f++){
        const th = document.createElement("th");
        tr.appendChild(th);

    }
    tbody = hor.querySelector("tbody");
    for(let f = 0; f < 6; f++){
        let fila = tbody.insertRow();
        for(let c = 0; c < 7; c++){
            let columna = fila.insertCell();
        }
    }
});

function añadirHorario(columna,hor_inicio, hor_final){
    const rows = tbody.rows;
    const a = document.createElement("button");
    a.classList.add("page-a-btn");
    a.innerHTML = hor_inicio + ":" + hor_final;
    a.href= "/EcoCine/peliculas/pelicula/boleteria";
    for(let i = tbody - 1; i >= 0; i--){
        let celda = rows[i].cells[columna];
        if(celda.innerHTML.trim() === ""){
            celda.appendChild(a);
            return;
        }
    }
}