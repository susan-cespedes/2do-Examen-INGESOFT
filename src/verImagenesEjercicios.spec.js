import { Ejercicio } from "./Ejercicio";
import * as constantes from "./constantes";
describe("Ver imagen de ejercicio", () => {
      it("Devuelve imagen predeterminada de un ejercicio", () => {
        let ejercicio= new Ejercicio("Numeros Primos","Numeros");
        expect(ejercicio.getImagen()).toEqual(constantes.IMAGENPREDETERMINADA);
      });
      it("Devuelve imagen propia del ejercicio", () => {
        let ejercicio= new Ejercicio("Numeros Romanos","Numeros","10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9");
        expect(ejercicio.getImagen()).toEqual("10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9");
      });
      
    }
  );