class Ejercicio{
    constructor(titulo="",categoria="",imagen="predeterminado.png",resumen=""){
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
    validarTitulo(){
        return this.titulo != "";
    }
    validarCategoria(){
      return this.categoria !="";
    }
    validarResumen(){
        return this.resumen !="";
    }
    validarAtributos(){
        return false;
    }
}
export  {Ejercicio};