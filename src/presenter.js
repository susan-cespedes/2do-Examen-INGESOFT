import { llenarEjercicios, crearjercicio, buscarEjercicioPorNombre,crearusuario } from "./presenterCatalogo";
import {crearusuario} from "./presenterCrearUser";
const menucatalogo = document.getElementById("menucatalogo");
const menuacregarejer = document.getElementById("menuacregarejer");
const contenidocatalogo = document.getElementById("contenidocatalogo");
const formularioejercicio = document.getElementById("formularioejercicio");
const btnregistrar = document.getElementById("crearregistro");
const menubuscarejer=document.getElementById("menubuscarejer");
const busqueda=document.getElementById("busqueda");
const txtbuscar=document.getElementById("txtbuscar");
const titulocatalogo=document.getElementById("titulocatalogo");
const menucrearusuario=document.getElementById("menucrearusuario");
const formulariocrearejercicio=document.getElementById("formulariocrearejercicio");
const btncrearuser=document.getElementById("btncrearuser");
formularioejercicio.style.display = "none";
busqueda.style.display="none"
formulariocrearejercicio.style.display="none";
titulocatalogo.innerHTML="CATALOGO EJERCICIOS";

menucatalogo.addEventListener("click", (env) => {
  env.preventDefault();
  formularioejercicio.style.display = "none";
  busqueda.style.display="none";
  formulariocrearejercicio.style.display="none";
  contenidocatalogo.style.display = "block";
  llenarEjercicios();
  titulocatalogo.innerHTML="CATALOGO EJERCICIOS";
});
menuacregarejer.addEventListener("click", (env) => {
  env.preventDefault();
  contenidocatalogo.style.display = "none";
  busqueda.style.display="none"
  formulariocrearejercicio.style.display="none";
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
  formulariocrearejercicio.style.display="none";
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
menucrearusuario.addEventListener("click",(env)=>{
  env.preventDefault();
  contenidocatalogo.style.display = "none";
  formularioejercicio.style.display = "none";
  busqueda.style.display="none";
  formulariocrearejercicio.style.display="block";
  titulocatalogo.innerHTML="CREAR USUARIO";
});
btncrearuser.addEventListener("click",(env)=>{
  env.preventDefault();
  crearusuario();
  
})

llenarEjercicios();
