import { Ejercicio } from "./Ejercicio";
import { Catalogo } from "./Catalogo";
import { ejerciciosPruebas } from "./constantes";
describe("Buscar ejercicio por nombre", () => {
    it("Devuelve vacio no encontro el ejercicio", () => {
        let catalogo=new Catalogo(ejerciciosPruebas);
        expect(catalogo.buscarPorNombre("Numeros Random")).toEqual([]);
      });
    it("Devuelve la lista de coincidencia con el nombre del ejercicio", () => {
        let catalogo=new Catalogo(ejerciciosPruebas);
        expect(catalogo.buscarPorNombre("Numeros Romanos")).toEqual([{"categoria": "Numeros", "imagen": "10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9", "resumen": "resumen2", "titulo": "Numeros Romanos"}]);
    });
    it("Devuelve la lista de coincidencia con el nombre del ejercicio", () => {
        let catalogo=new Catalogo(ejerciciosPruebas);
        expect(catalogo.buscarPorNombre("Numeros Primos")).toEqual([{"categoria": "Numeros", "imagen": "1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph", "resumen": "resumen", "titulo": "Numeros Primos"}]);
    });
    it("Devuelve la lista de coincidencia con el ejercicio titulado numeros random", () => {
      let ejercicio=new Ejercicio("Numeros Random",undefined,undefined,undefined);
      ejerciciosPruebas.push(ejercicio);
      let catalogo=new Catalogo(ejerciciosPruebas);
      expect(catalogo.buscarPorNombre("Numeros Random")).toEqual([{"categoria": "","imagen": "1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph","resumen": "","titulo": "Numeros Random"}]);
  });
  }
);


