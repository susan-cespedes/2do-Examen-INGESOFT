import {Ejercicio} from "./Ejercicio"

describe("Crear Ejercicios", () => {
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






