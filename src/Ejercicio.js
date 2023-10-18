class Ejercicio{
    constructor(titulo,categoria){
        this.titulo=titulo;
        this.categoria=categoria;
    }
    getTitulo(){
        return this.titulo;
    }
    getCategoria(){
        return this.categoria;
    }
    getImagen(){
        return "imagenpredeterminada.jpg";
    }
}
export default Ejercicio;