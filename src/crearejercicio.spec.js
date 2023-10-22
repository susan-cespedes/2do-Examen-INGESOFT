import {Ejercicio} from "./Ejercicio"
import { Catalogo } from "./Catalogo";
import { ejercicios } from "./dataCatalogo";

describe("Crear Ejercicios con título", () => {

    it("Validar que el título no esté vacío", () => {
      let ejercicio= new Ejercicio()
      expect(ejercicio.validarTitulo()).toEqual(false);
    });
    it("Validar que el título tenga contenido", () => {
      let ejercicio= new Ejercicio("Nombre")
      expect(ejercicio.validarTitulo()).toEqual(true);
    });
   
  }
);

describe("Crear Ejercicios con categoría", () => {

  it("Validar que la categoria no esté vacío", () => {
    let ejercicio= new Ejercicio()
    expect(ejercicio.validarCategoria()).toEqual(false);
  });
  it("Validar que el campo categoria tenga contenido", () => {
    let ejercicio= new Ejercicio("nombre","categoria")
    expect(ejercicio.validarCategoria()).toEqual(true);
  });
  
 
}
);

describe("Crear Ejercicios con resumen", () => {

  it("Validar que el campo resumen no esté vacío", () => {
    let ejercicio= new Ejercicio()
    expect(ejercicio.validarResumen()).toEqual(false);
  });
  it("Validar que el campo resumen tenga cotenido", () => {
    let ejercicio= new Ejercicio("nombre","categoria","","resumen")
    expect(ejercicio.validarResumen()).toEqual(true);
  });
 
 
}
);

describe("Crear Ejercicio en el catálogo", () => {

  it("Devuelve la lista en el catálogo con el ejercicio agregado", () => {
    
    let catalogo=new Catalogo([new Ejercicio("Numeros Primos"),new Ejercicio("Numeros Romanos")])
    let ejercicio= new Ejercicio("Ahorcado")
    catalogo.agregarEjercicio(ejercicio);
    expect(catalogo.getEjercicios()).toEqual([{"categoria": undefined, "imagen": "predeterminado.png", "resumen": undefined, "titulo": "Numeros Primos"}, {"categoria": undefined, "imagen": "predeterminado.png", "resumen": undefined, "titulo": "Numeros Romanos"}, {"categoria": undefined, "imagen": "predeterminado.png", "resumen": undefined, "titulo": "Ahorcado"}]);
  });
 
 
 
}
);






