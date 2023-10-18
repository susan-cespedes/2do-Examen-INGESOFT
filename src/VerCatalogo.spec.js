import Ejercicio from "./Ejercicio.js";
import Catalogo from "./Catalogo.js";
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

describe("Ver imagen de ejercicio", () => {
    it("Devuelve imagen predeterminada de un ejercicio", () => {
      let ejercicio= new Ejercicio("Numeros Primos","Numeros");
      expect(ejercicio.getImagen()).toEqual("imagenpredeterminada.jpg");
    });
    it("Devuelve imagen de un ejercicio", () => {
        let ejercicio= new Ejercicio("Numeros Romanos","Numeros","imgromanos.jpg");
        expect(ejercicio.getImagen()).toEqual("imgromanos.jpg");
      });
  }
);

describe("Ver resumen del ejercicio", () => {
    it("Devuelve resumen del ejercicio de numero Primos", () => {
      let ejercicio= new Ejercicio("Numeros Primos","Numeros",undefined,"Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.");
      expect(ejercicio.getResumen()).toEqual("Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.");
    });
    it("Devuelve resumen del ejercicio de numeros Romanos", () => {
        let ejercicio= new Ejercicio("Numeros Primos","Numeros","imgromanos.jpg", "Los romanos fueron ingeniosos conquistadores de Europa, inventaron cosas como el concreto y las carreteras rectas, pero nunca descubrieron el número cero. A pesar de ello, crearon un sistema numérico con letras que todavía se usa hoy en día, como I, V, X, L, C, D, M. Por ejemplo, la BBC usa números romanos en sus programas");
        expect(ejercicio.getResumen()).toEqual("Los romanos fueron ingeniosos conquistadores de Europa, inventaron cosas como el concreto y las carreteras rectas, pero nunca descubrieron el número cero. A pesar de ello, crearon un sistema numérico con letras que todavía se usa hoy en día, como I, V, X, L, C, D, M. Por ejemplo, la BBC usa números romanos en sus programas");
      });
  }
);
describe("Ver ejercicios en el catalogo", () => {
    it("Devuelve No se tiene ejercicios disponibles si la lista esta vacia", () => {
      let catalogo= new Catalogo();
      expect(catalogo.verificarListaVacia()).toEqual("No se tiene ejercicios disponibles");
    });
    it("Devuelve La lista tiene ejercicio si la lista no esta vacia", () => {
        let catalogo= new Catalogo([new Ejercicio()]);
        expect(catalogo.verificarListaVacia()).toEqual("La lista tiene ejercicios");
      });
      it("Devuelve lista vacia al listar 0 ejercicios", () => {
        let catalogo= new Catalogo([new Ejercicio()]);
        expect(catalogo.getNPrimerosEjercicios(0)).toEqual([]);
      });
      it("Devuelve el primer ejercicio", () => {
        let ejercicio=new Ejercicio(
            "Numeros Primos","Numeros",undefined,
            "Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación."
        );
        let catalogo= new Catalogo([ejercicio]);
        expect(catalogo.getNPrimerosEjercicios(1)).toEqual([{"categoria": "Numeros", "imagen": "imagenpredeterminada.jpg", "resumen": "Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.", "titulo": "Numeros Primos"}]);
      });
      it("Devuelve los 2 primeros ejercicios", () => {
        let catalogo= new Catalogo([
            new Ejercicio(
                "Numeros Primos","Numeros",undefined,
                "Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación."
            ),
            new Ejercicio(
                "Numeros Romanos","Numeros",
                "Los romanos fueron ingeniosos conquistadores de Europa, inventaron cosas como el concreto y las carreteras rectas, pero nunca descubrieron el número cero. A pesar de ello, crearon un sistema numérico con letras que todavía se usa hoy en día, como I, V, X, L, C, D, M. Por ejemplo, la BBC usa números romanos en sus programas",
                "imgromanos.jpg"
             )
        ]);
        expect(catalogo.getNPrimerosEjercicios(2)).toEqual([
            {   "categoria": "Numeros",
                "imagen": "imagenpredeterminada.jpg",
                 "resumen": "Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.", "titulo": "Numeros Primos"},
            {
                "categoria": "Numeros",
                "imagen": "Los romanos fueron ingeniosos conquistadores de Europa, inventaron cosas como el concreto y las carreteras rectas, pero nunca descubrieron el número cero. A pesar de ello, crearon un sistema numérico con letras que todavía se usa hoy en día, como I, V, X, L, C, D, M. Por ejemplo, la BBC usa números romanos en sus programas",
                "resumen": "imgromanos.jpg",
                "titulo": "Numeros Romanos",
            }
        ]);
      });
 
  }
);
