import { llenarEjercicios, crearjercicio, buscarEjercicioPorNombre } from "./presenterCatalogo";
const menucatalogo = document.getElementById("menucatalogo");
const menuacregarejer = document.getElementById("menuacregarejer");
const contenidocatalogo = document.getElementById("contenidocatalogo");
const formularioejercicio = document.getElementById("formularioejercicio");
const btnregistrar = document.getElementById("crearregistro");
const menubuscarejer=document.getElementById("menubuscarejer");
const busqueda=document.getElementById("busqueda");
const txtbuscar=document.getElementById("txtbuscar");
const titulocatalogo=document.getElementById("titulocatalogo");
formularioejercicio.style.display = "none";
busqueda.style.display="none"
titulocatalogo.innerHTML="CATALOGO EJERCICIOS";

menucatalogo.addEventListener("click", (env) => {
  env.preventDefault();
  formularioejercicio.style.display = "none";
  busqueda.style.display="none"
  contenidocatalogo.style.display = "block";
  llenarEjercicios();
  titulocatalogo.innerHTML="CATALOGO EJERCICIOS";
});
menuacregarejer.addEventListener("click", (env) => {
  env.preventDefault();
  contenidocatalogo.style.display = "none";
  busqueda.style.display="none"
  formularioejercicio.style.display = "block";
  titulocatalogo.innerHTML="CREAR EJERCICIO";

});
btnregistrar.addEventListener("click", (env) => {
  env.preventDefault();
  crearjercicio();
});

menubuscarejer.addEventListener("click",(env)=>{
  env.preventDefault();
  contenidocatalogo.style.display = "none";
  formularioejercicio.style.display = "none";
  busqueda.style.display="block";
  titulocatalogo.innerHTML="BUSCAR EJERCICIO";

})

txtbuscar.addEventListener("keypress",(env)=>{
  if(env.key=="Enter"){
    env.preventDefault();
    contenidocatalogo.style.display = "block";
    
    buscarEjercicioPorNombre();
  }
  
  
});

llenarEjercicios();
