import { Catalogo } from "./Catalogo.js";
import { Ejercicio } from "./Ejercicio.js";
import { ejercicios } from "./dataCatalogo.js";
import { URLIMAGENES } from "./constantes.js";
const detalleCatalogo = document.getElementById("detallecatalogo");
const catalogo = new Catalogo(ejercicios);
const txtNombre = document.getElementById("txtNombre");
const selecCategoria = document.getElementById("selecCategoria");
const txtDetalle = document.getElementById("txtDetalle");

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

function llenarEjercicios() {
  console.log(catalogo);
  if (
    catalogo.verificarListaVacia() == "No se tiene ejercicios disponibles" ||
    detalleCatalogo == null
  ) {
    detalleCatalogo.innerHTML += `<p>${catalogo.verificarListaVacia()}</p>`;
    return;
  }
  crearHTMLejercicios(catalogo.getEjercicios(), detalleCatalogo);
}

function crearjercicio() {
  const nombre = txtNombre.value;
  const categoria = selecCategoria.value;
  const detalle = txtDetalle.value;
  let ejercicio = new Ejercicio(nombre, categoria, undefined, detalle);
  if (ejercicio.validarAtributos() == true) {
    alert("Datos subidos correctamente");
    catalogo.agregarEjercicio(ejercicio);
  } else {
    alert("Todos los campos son obligatorios");
  }
}
export { llenarEjercicios, crearjercicio };
