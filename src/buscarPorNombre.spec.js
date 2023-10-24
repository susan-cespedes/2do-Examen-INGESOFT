import { Catalogo } from "./Catalogo";
import { Ejercicio } from "./Ejercicio";

describe("Buscar ejercicio por nombre", () => {
    it("Devuelve vacio no encontro el ejercicio", () => {
        let catalogo=new Catalogo([new Ejercicio("Numeros Primos"),new Ejercicio("Numeros Romanos")]);
        expect(catalogo.buscarPorNombre("Numeros Random")).toEqual([]);
      });
    it("Devuelve la lista de coincidencia con el nombre del ejercicio", () => {
        let catalogo=new Catalogo([new Ejercicio("Numeros Primos"),new Ejercicio("Numeros Romanos")]);
        expect(catalogo.buscarPorNombre("Numeros Romanos")).toEqual([{"categoria": "", "imagen": "predeterminado.png", "resumen": "", "titulo": "Numeros Romanos"}]);
    });
  }
);


