import {Ejercicio} from "./Ejercicio"

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






