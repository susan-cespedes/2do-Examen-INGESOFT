import {Ejercicio} from "./Ejercicio"

describe("Crear Ejercicios", () => {
    it("Validar que el título no esté vacío", () => {
      let ejercicio= new Ejercicio()
      expect(ejercicio.validarTitulo()).toEqual(false);
    });
   
  }
);






