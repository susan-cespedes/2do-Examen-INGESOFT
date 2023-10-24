
import { Ejercicio } from "./Ejercicio.js";
import catalogo from "./presenter.js";

const txtNombre=document.getElementById("txNombre");
const selecCategoria=document.getElementById("selecCategoria");
const txtDetalle=document.getElementById("txtDetalle");
const btnregistrar=document.getElementById("crearregistro");

  
btnregistrar.addEventListener("click", (env)=>{
    env.preventDefault();
    const nombre=txtNombre.value;
    const categoria=selecCategoria.value;
    const detalle=txtDetalle.value;

let ejercicio = new Ejercicio(nombre,categoria,undefined,detalle);
catalogo.agregarEjercicio(ejercicio);
 

})


  
