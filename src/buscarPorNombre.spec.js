import { Ejercicio } from "./Ejercicio";
import { Catalogo } from "./Catalogo";

describe("Buscar ejercicio por nombre", () => {
    it("Devuelve vacio no encontro el ejercicio", () => {
        let catalogo=new Catalogo([new Ejercicio("Numeros Primos"),new Ejercicio("Numeros Romanos")]);
        expect(catalogo.buscarPorNombre("Numeros Random")).toEqual([]);
      });
    it("Devuelve la lista de coincidencia con el nombre del ejercicio", () => {
        let catalogo=new Catalogo([new Ejercicio("Numeros Primos"),new Ejercicio("Numeros Romanos")]);
        expect(catalogo.buscarPorNombre("Numeros Romanos")).toEqual([{"categoria": "", "imagen": "predeterminado.png", "resumen": "", "titulo": "Numeros Romanos"}]);
    });
    it("Devuelve la lista de coincidencia con el nombre del ejercicio", () => {
        let catalogo=new Catalogo([new Ejercicio("Numeros Primos"),new Ejercicio("Numeros Romanos")]);
        expect(catalogo.buscarPorNombre("Numeros Primos")).toEqual([{"categoria": "", "imagen": "predeterminado.png", "resumen": "", "titulo": "Numeros Primos"}]);
    });
    it("Devuelve la lista de coincidencia con el ejercicio titulado numeros random", () => {
      let catalogo=new Catalogo([new Ejercicio("Numeros Primos"),new Ejercicio("Numeros Romanos"),new Ejercicio("Numeros Random")]);
      expect(catalogo.buscarPorNombre("Numeros Random")).toEqual([{"categoria": "", "imagen": "predeterminado.png", "resumen": "", "titulo": "Numeros Random"}]);
  });
  }
);


