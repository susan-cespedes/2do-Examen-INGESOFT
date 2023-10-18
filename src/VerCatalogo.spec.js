

describe("Ver titulo,categoria,imagen,resumen", () => {
    it("Devuelve título de un ejercicio", () => {
      expect(getTitulo()).toEqual("Numeros Primos");
    });
  }
);
function getTitulo(){
    return "Numeros Primos";
}