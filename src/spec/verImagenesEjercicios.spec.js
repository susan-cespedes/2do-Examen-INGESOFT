import { Ejercicio } from "../Ejercicio";
import * as constantes from "../constantes";
function getImagenEjercicio(titulo,categoria,imagen){
    let ejercicio= new Ejercicio(titulo,categoria,imagen);
    return ejercicio.getImagen();
}
describe("Ver imagen de ejercicio", () => {
      it("Devuelve imagen predeterminada de un ejercicio", () => {
        expect(getImagenEjercicio("Numeros Primos","Numeros")).toEqual(constantes.IMAGENPREDETERMINADA);
      });
      it("Devuelve imagen propia del ejercicio", () => {
        expect(getImagenEjercicio("Numeros Romanos","Numeros","10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9")).toEqual("10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9");
      });
      
    }
  );