import { Ejercicio } from "./Ejercicio";

describe("Ver imagen de ejercicio", () => {
      it("Devuelve imagen predeterminada de un ejercicio", () => {
        let ejercicio= new Ejercicio("Numeros Primos","Numeros");
        expect(ejercicio.getImagen()).toEqual("1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph");
      });
    }
  );