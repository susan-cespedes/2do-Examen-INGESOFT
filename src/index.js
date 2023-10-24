import { llenarEjercicios, crearjercicio } from "./presenter";
const menucatalogo = document.getElementById("menucatalogo");
const menuacregarejer = document.getElementById("menuacregarejer");
const contenidocatalogo = document.getElementById("contenidocatalogo");
const formularioejercicio = document.getElementById("formularioejercicio");
const btnregistrar = document.getElementById("crearregistro");
formularioejercicio.style.display = "none";

menucatalogo.addEventListener("click", (env) => {
  env.preventDefault();
  formularioejercicio.style.display = "none";
  contenidocatalogo.style.display = "block";
  llenarEjercicios();
});
menuacregarejer.addEventListener("click", (env) => {
  env.preventDefault();
  contenidocatalogo.style.display = "none";
  formularioejercicio.style.display = "block";
});
btnregistrar.addEventListener("click", (env) => {
  env.preventDefault();
  crearjercicio();
});

llenarEjercicios();
