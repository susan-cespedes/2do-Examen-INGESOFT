import Ejercicio from "./Ejercicio.js";

describe("Ver titulo,categoria,imagen,resumen", () => {
    it("Devuelve título de un ejercicio", () => {
      let ejercicio= new Ejercicio();
      expect(ejercicio.getTitulo()).toEqual("Numeros Primos");
    });
  }
);
