import Ejercicio from "./Ejercicio.js";

describe("Ver titulo de ejercicio", () => {
    it("Devuelve título de un ejercicio", () => {
      let ejercicio= new Ejercicio("Numeros Primos");
      expect(ejercicio.getTitulo()).toEqual("Numeros Primos");
    });
    it("Devuelve título de un ejercicio titulado Numeros Romanos", () => {
        let ejercicio= new Ejercicio("Numeros Romanos");
        expect(ejercicio.getTitulo()).toEqual("Numeros Romanos");
      });
  }
);
