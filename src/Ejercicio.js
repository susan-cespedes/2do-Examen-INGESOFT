class Ejercicio{
    constructor(titulo,categoria,imagen="imagenpredeterminada.jpg",resumen){
        this.titulo=titulo;
        this.categoria=categoria;
        this.imagen=imagen;
        this.resumen=resumen;
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
    getResumen(){
        return this.resumen;
    }
}
export default Ejercicio;