class Ejercicio{
    constructor(titulo,categoria,imagen="predeterminado.png",resumen){
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
        
        return this.titulo != undefined;
        
    }
    validarCategoria(){
      return this.categoria !=undefined;
    }
    validarResumen(){
        if (this.resumen != undefined){
            return true;
        }
        else{
            return false;
        }

    }
}
export  {Ejercicio};