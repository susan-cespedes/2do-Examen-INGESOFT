import { Catalogo } from "./Catalogo.js";
import {ejercicios} from "./dataCatalogo.js";
import {Ejercicio} from "./Ejercicio.js";
// pruebas titulo Ejercicio
function getTituloEjercicio(titulo){
  let ejercicio= new Ejercicio(titulo);
  return ejercicio.getTitulo();
}
describe("Ver titulo de ejercicio", () => {
    it("Devuelve título de un ejercicio", () => {
      expect(getTituloEjercicio("Numeros Primos")).toEqual("Numeros Primos");
    });
    it("Devuelve título de un ejercicio titulado Numeros Romanos", () => {
        expect(getTituloEjercicio("Numeros Romanos")).toEqual("Numeros Romanos");
      });
  }
);


// pruebas Categoria ejercicio
function getCategoriaEjercicio(titulo,categoria){
  let ejercicio= new Ejercicio(titulo,categoria);
  return ejercicio.getCategoria();
}
describe("Ver categoria de ejercicio", () => {
    it("Devuelve categoria de un ejercicio de categoria numeros", () => {
      expect(getCategoriaEjercicio("Numeros Primos","Numeros")).toEqual("Numeros");
    });
    it("Devuelve categoria de un ejercicio de categoria Juegos", () => {
        expect(getCategoriaEjercicio("Tic-Tac-Toe","Juegos")).toEqual("Juegos");
      });
  }
);
 
// pruebas imagenes de ejercicio
function getImagenEjercicio(titulo,categoria,imagen){
  let ejercicio= new Ejercicio(titulo,categoria,imagen);
  return ejercicio.getImagen();
}
describe("Ver imagen de ejercicio", () => {
    it("Devuelve imagen predeterminada de un ejercicio", () => {
      expect(getImagenEjercicio("Numeros Primos","Numeros")).toEqual("predeterminado.png");
    });
    it("Devuelve imagen de un ejercicio", () => {
        expect(getImagenEjercicio("Numeros Romanos","Numeros","imgromanos.png")).toEqual("imgromanos.png");
      });
  }
);

// pruebas resumen de ejercicio
function getResumenEjercicio(titulo,categoria,imagen,resumen){
  let ejercicio= new Ejercicio(titulo,categoria,imagen,resumen);
  return ejercicio.getResumen();
}
describe("Ver resumen del ejercicio", () => {
    it("Devuelve resumen del ejercicio de numero Primos", () => {
        expect(getResumenEjercicio("Numeros Primos","Numeros",undefined,"Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.")).toEqual("Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.");
    });
    it("Devuelve resumen del ejercicio de numeros Romanos", () => {
        expect(getResumenEjercicio("Numeros Romanos","Numeros","imgromanos.png", "Los romanos fueron ingeniosos conquistadores de Europa, inventaron cosas como el concreto y las carreteras rectas, pero nunca descubrieron el número cero. A pesar de ello, crearon un sistema numérico con letras que todavía se usa hoy en día, como I, V, X, L, C, D, M. Por ejemplo, la BBC usa números romanos en sus programas")).toEqual("Los romanos fueron ingeniosos conquistadores de Europa, inventaron cosas como el concreto y las carreteras rectas, pero nunca descubrieron el número cero. A pesar de ello, crearon un sistema numérico con letras que todavía se usa hoy en día, como I, V, X, L, C, D, M. Por ejemplo, la BBC usa números romanos en sus programas");
      });
  }
);

//pruebas catalogo ejercicios
function verificarListaVaciaCatalogo(ejerciciosCatalogo){
  let catalogo= new Catalogo(ejerciciosCatalogo);
  return catalogo.verificarListaVacia();
}
function getNPrimerosEjerciciosDeCatalogo(ejerciciosCatalogo,cantAListar){
  let catalogo= new Catalogo(ejerciciosCatalogo);
  return catalogo.getNPrimerosEjercicios(cantAListar);
}
describe("Ver ejercicios en el catalogo", () => {
    it("Devuelve No se tiene ejercicios disponibles si la lista esta vacia", () => {
      expect(verificarListaVaciaCatalogo()).toEqual("No se tiene ejercicios disponibles");
    });
    it("Devuelve La lista tiene ejercicio si la lista no esta vacia", () => {
        expect(verificarListaVaciaCatalogo([new Ejercicio()])).toEqual("La lista tiene ejercicios");
      });
      it("Devuelve lista vacia al listar 0 ejercicios", () => {
        expect(getNPrimerosEjerciciosDeCatalogo([new Ejercicio()],0)).toEqual([]);
      });
      it("Devuelve el primer ejercicio", () => {
        expect(getNPrimerosEjerciciosDeCatalogo(ejercicios,1)).toEqual([{"categoria": "Numeros", "imagen": "predeterminado.png", "resumen": "Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.", "titulo": "Numeros Primos"}]);
      });
      it("Devuelve los 2 primeros ejercicios", () => {
        expect(getNPrimerosEjerciciosDeCatalogo(ejercicios,2)).toEqual([
            {
                 "categoria": "Numeros",
                 "imagen": "predeterminado.png",
                 "resumen": "Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.",
                 "titulo": "Numeros Primos",
             },
            {
                 "categoria": "Numeros",
                 "imagen": "imgromanos.png",
                 "resumen": "Los romanos fueron ingeniosos conquistadores de Europa, inventaron cosas como el concreto y las carreteras rectas, pero nunca descubrieron el número cero. A pesar de ello, crearon un sistema numérico con letras que todavía se usa hoy en día, como I, V, X, L, C, D, M. Por ejemplo, la BBC usa números romanos en sus programas",
                 "titulo": "Numeros Romanos",
            }
        ]);
      });
 
  }
);
