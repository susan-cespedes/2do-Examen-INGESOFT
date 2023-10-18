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

describe("Ver categoria de ejercicio", () => {
    it("Devuelve categoria de un ejercicio de categoria numeros", () => {
      let ejercicio= new Ejercicio("Numeros Primos","Numeros");
      expect(ejercicio.getCategoria()).toEqual("Numeros");
    });
    it("Devuelve categoria de un ejercicio de categoria Juegos", () => {
        let ejercicio= new Ejercicio("Tic-Tac-Toe","Juegos");
        expect(ejercicio.getCategoria()).toEqual("Juegos");
      });
  
  }
);