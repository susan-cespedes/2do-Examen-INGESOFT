import { Catalogo } from "./Catalogo.js";
import { ejercicios } from "./dataCatalogo.js";
const catalogo= new Catalogo(ejercicios);
const detalleCatalogo=document.getElementById("detallecatalogo");
function llenarEjercicios(){
  let ejerciciosHTML=``;
  if(catalogo.verificarListaVacia()=="No se tiene ejercicios disponibles"){
    detalleCatalogo.innerHTML+=`<p>${catalogo.verificarListaVacia()}</p>`;
    return;
  }
  catalogo.getNPrimerosEjercicios(10).forEach(ejercicio => {
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
llenarEjercicios();


