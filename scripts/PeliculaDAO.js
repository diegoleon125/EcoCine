export class PeliculaDAO{
    //conexión a la db
    static peliculasPath = "http://localhost:8080/EcoCine/backend/peliculas.php";

    static async getPelicula(pelicula_id){
        try {
            const respuesta = await fetch(`${this.peliculasPath}?accion=id&id=${pelicula_id}`);
            if (!respuesta.ok) return null;
            const resultado = await respuesta.json();
            return resultado.datos;
        } catch (error){
            console.error("Error en PeliculaDAO:", error);
            return null;
        }
    }
    static async getTop3(){
        try {
            const respuesta = await fetch(`${this.peliculasPath}?accion=top3`);
            if (!respuesta.ok) return [];
            return await respuesta.json();
        } catch (error){
            console.error("Error en PeliculaDAO:", error);
            return [];
        }
    }
    static async getTodas(){
        try {
            const respuesta = await fetch(`${this.peliculasPath}?accion=todas`);
            if (!respuesta.ok) return [];
            return await respuesta.json();
        } catch (error){
            console.error("Error en PeliculaDAO:", error);
            return [];
        }
    }
}