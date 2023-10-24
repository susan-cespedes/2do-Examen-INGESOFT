import {Ejercicio} from "./Ejercicio"
import { Catalogo } from "./Catalogo";
import { ejercicios } from "./dataCatalogo";

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

describe("Crear Ejercicio en el catálogo", () => {
  it("Devuelve la lista en el catálogo con el ejercicio agregado", () => {
    let catalogo=new Catalogo([new Ejercicio("Numeros Primos"),new Ejercicio("Numeros Romanos")])
    let ejercicio= new Ejercicio("Ahorcado")
    catalogo.agregarEjercicio(ejercicio);
    expect(catalogo.getEjercicios()).toEqual([{"categoria": "", "imagen": "predeterminado.png", "resumen": "", "titulo": "Numeros Primos"}, {"categoria": "", "imagen": "predeterminado.png", "resumen": "", "titulo": "Numeros Romanos"}, {"categoria": "", "imagen": "predeterminado.png", "resumen": "", "titulo": "Ahorcado"}]);
  });
}
);






