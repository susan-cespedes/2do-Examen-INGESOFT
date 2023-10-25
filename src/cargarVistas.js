import { URLIMAGENES } from "./constantes"
const contenedor = document.getElementById("contenido");

function crearHTMLejercicios(listaEjercicios, contenedor) {
    contenedor.innerHTML = "";
    let ejerciciosHTML = ``;
    listaEjercicios.forEach((ejercicio) => {
      let imagen=URLIMAGENES+ejercicio.getImagen();
      ejerciciosHTML += `
          <div id="imgdetallecatalog">
            <div id="marcoimagen">
              <img src=${imagen} width="150px" height="100px">
            </div>
          </div>
          <div id="contenidodetallecatalogo">
            <h3>${ejercicio.getTitulo()}</h3>
            <p>${ejercicio.getResumen()}<span>Ver mas</span></p>
          </div>`;
    });
    contenedor.innerHTML += ejerciciosHTML;
  }
  function crearfrmListarEjercicios(){
    contenedor.innerHTML+=` <div id="contenidocatalogo">
    <div id="datoscatalogo">

        <div id="detallecatalogo">


        </div>
    </div>

</div>`
  }
  crearfrmListarEjercicios();
  export {crearHTMLejercicios};