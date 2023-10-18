class Ejercicio{
    constructor(titulo,categoria,imagen="imagenpredeterminada.jpg"){
        this.titulo=titulo;
        this.categoria=categoria;
        this.imagen=imagen;
    }
    getTitulo(){
        return this.titulo;
    }
    getCategoria(){
        return this.categoria;
    }
    getImagen(){
        return this.imagen;
    }
}
export default Ejercicio;