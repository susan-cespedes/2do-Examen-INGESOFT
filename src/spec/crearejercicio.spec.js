import {Ejercicio} from "../Ejercicio"
import { Catalogo } from "../Catalogo";
import { ejerciciosPruebas } from "../constantes";
function validarTitulo(titulo){
  let ejercicio= new Ejercicio(titulo);
  return ejercicio.validarTitulo();
}
describe("Crear Ejercicios con título", () => {

    it("Validar que el título no esté vacío", () => {
      expect(validarTitulo()).toEqual(false);
    });
    it("Validar que el título tenga contenido", () => {
      expect(validarTitulo("Nombre")).toEqual(true);
    });
   
  }
);

function validarCategoria(categoria){
  let ejercicio= new Ejercicio("nombre",categoria);
  return ejercicio.validarCategoria();
}
describe("Crear Ejercicios con categoría", () => {

  it("Validar que la categoria no esté vacío", () => {
    expect(validarCategoria()).toEqual(false);
  });
  it("Validar que el campo categoria tenga contenido", () => {
    expect(validarCategoria("categoria")).toEqual(true);
  });
}
);

function validarResumen(resumen){
  let ejercicio= new Ejercicio("nombre","categoria","",resumen);
  return ejercicio.validarResumen();
}
describe("Crear Ejercicios con resumen", () => {

  it("Validar que el campo resumen no esté vacío", () => {
    expect(validarResumen()).toEqual(false);
  });
  it("Validar que el campo resumen tenga cotenido", () => {
    expect(validarResumen("resumen")).toEqual(true);
  });
}
);
function agregarEjercicioAlCatalogo(ejercicio,ejercicios){
    let catalogo=new Catalogo(ejercicios);
    catalogo.agregarEjercicio(ejercicio);
    return catalogo.getEjercicios();
}
describe("Crear Ejercicio en el catálogo", () => {
  it("Devuelve la lista en el catálogo con el ejercicio agregado", () => {
    let ejercicios=ejerciciosPruebas;
    ejercicios.push(new Ejercicio("Ahorcado"));
    expect(agregarEjercicioAlCatalogo(new Ejercicio("Ahorcado"),ejerciciosPruebas)).toEqual(ejercicios);
  });
}
);
function validarAtributos(titulo,categoria,imagen,resumen){
  let ejercicio=new Ejercicio(titulo,categoria,imagen,resumen);
  return ejercicio.validarAtributos();
}
describe("Validar los atributos de un ejercicio", () => {
  it("Validar que tenga todos los campos ejercicio sin campos", () => {       
    expect(validarAtributos()).toEqual(false);
  });
  it("Validar que tenga todos los campos ejercicio con titulo, categoria y resumen", () => {       
    expect(validarAtributos("titulo1","juego",undefined,"resumen1")).toEqual(true);
  });
}
);






