import { Catalogo } from "./Catalogo.js";
import { Ejercicio } from "./Ejercicio.js";
import { ejercicios } from "./dataCatalogo.js";
const catalogo= new Catalogo(ejercicios);
const detalleCatalogo=document.getElementById("detallecatalogo");
const menucatalogo=document.getElementById("menucatalogo");
const menuacregarejer=document.getElementById("menuacregarejer");
const contenidocatalogo=document.getElementById("contenidocatalogo");
const formularioejercicio=document.getElementById("formularioejercicio");
const btnregistrar=document.getElementById("crearregistro");
formularioejercicio.style.display="none";

menucatalogo.addEventListener("click", (env)=>{
  
  env.preventDefault();
  formularioejercicio.style.display="none";
  contenidocatalogo.style.display="block";
  llenarEjercicios();
 
});
menuacregarejer.addEventListener("click", (env)=>{
  env.preventDefault();
  contenidocatalogo.style.display="none";
  formularioejercicio.style.display="block";
 
})
btnregistrar.addEventListener("click", (env)=>{
  env.preventDefault();
   crearjercicio();
})
   function llenarEjercicios(){
    detalleCatalogo.innerHTML="";
    let ejerciciosHTML=``;
    console.log(catalogo)
    if(catalogo.verificarListaVacia()=="No se tiene ejercicios disponibles" || detalleCatalogo==null){
      detalleCatalogo.innerHTML+=`<p>${catalogo.verificarListaVacia()}</p>`;
      return;
    }
    catalogo.getEjercicios().forEach(ejercicio => {
        ejerciciosHTML+=`
        <div id="imgdetallecatalog">
          <div id="marcoimagen">
            <img src="img/${ejercicio.getImagen()}" width="150px" height="auto">
          </div>
        </div>
        <div id="contenidodetallecatalogo">
          <h3>${ejercicio.getTitulo()}</h3>
          <p>${ejercicio.getResumen()}<span>Ver mas</span></p>
        </div>`;
    });
    detalleCatalogo.innerHTML+=ejerciciosHTML;
  }
 function crearjercicio(){
const txtNombre=document.getElementById("txtNombre");
const selecCategoria=document.getElementById("selecCategoria");
const txtDetalle=document.getElementById("txtDetalle");

    const nombre=txtNombre.value;
    const categoria=selecCategoria.value;
    const detalle=txtDetalle.value;
      
    let ejercicio=new Ejercicio(nombre,categoria,undefined,detalle);
   
    if(ejercicio.validarTitulo()==true && ejercicio.validarCategoria()==true && ejercicio.validarResumen() ==true){
     alert("Datos subidos correctamente")
     catalogo.agregarEjercicio(ejercicio);
     llenarEjercicios();
        }
    else{
      alert("Todos los campos son obligatorios")
    }
 }
  

 llenarEjercicios();


