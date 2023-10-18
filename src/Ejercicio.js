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
    getResumen(){
        return "Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.";
    }
}
export default Ejercicio;