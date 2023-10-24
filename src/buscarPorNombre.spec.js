import { Catalogo } from "./Catalogo";
import { Ejercicio } from "./Ejercicio";

describe("Buscar ejercicio por nombre", () => {
    it("Devuelve vacio no encontro el ejercicio", () => {
        let catalogo=new Catalogo([new Ejercicio("Numeros Primos"),new Ejercicio("Numeros Romanos")]);
        expect(catalogo.buscarPorNombre("Números Random")).toEqual([]);
      });
  }
);


