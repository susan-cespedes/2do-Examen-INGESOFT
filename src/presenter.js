// import sumar from "./sumador";
import { Catalogo } from "./Catalogo.js";
import { ejercicios } from "./dataCatalogo.js";
const imgs=require('./img/predeterminado.png');
const catalogo= new Catalogo(ejercicios);
const detalleCatalogo=document.getElementById("detallecatalogo");
function llenarEjercicios(){
  console.log(imgs);
  let ejerciciosHTML=``;
  catalogo.getNPrimerosEjercicios(10).forEach(ejercicio => {
    ejerciciosHTML+=`
    <div id="imgdetallecatalog">
       <div id="marcoimagen">
        <img src="${imgs})}" width="150px" height="auto">
      </div>
    </div>
    <div id="contenidodetallecatalogo">
      <h3>${ejercicio.getTitulo()}</h3>
      <p>${ejercicio.getResumen()}<span>Ver mas</span></p>
    </div>`;
    console.log(ejercicio.getImagen());
  });
  detalleCatalogo.innerHTML+=ejerciciosHTML;
}
llenarEjercicios();


