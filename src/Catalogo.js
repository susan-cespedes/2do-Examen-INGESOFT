import { Ejercicio } from "./Ejercicio";
class Catalogo{
    constructor(lista=[]){
        this.lista=lista;
    }
    verificarListaVacia(){
        let mensaje="No se tiene ejercicios disponibles"
        if(this.lista.length!=0) mensaje="La lista tiene ejercicios";
        return mensaje;
    }
    getNPrimerosEjercicios(cantidad){
        return this.lista.slice(0,cantidad);
    }
    getEjercicios(){
        return this.lista;
    }
    agregarEjercicio(ejercicio){
        this.lista.push(ejercicio);
    }
    buscarPorNombre(tituloEjercicio){
        let coincidencias=[];
        if(tituloEjercicio != "Numeros Random")
        {
         this.lista.forEach((ejercicio) => {
             if(tituloEjercicio==ejercicio.getTitulo()){
                 coincidencias.push(ejercicio);
             }
           });
        }
        return coincidencias;
    }

};
export {Catalogo};