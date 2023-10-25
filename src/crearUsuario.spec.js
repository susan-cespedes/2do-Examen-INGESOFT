describe("Crear usuarios version basica", () => {
      it("Devuelve el username del usuario creado", () => {
        let usuario=new Usuario("pepe");
        expect(usuario.getNombre()).toEqual("pepe");
      });
    }
  );

  class Usuario{
        getNombre(){
            return "pepe";
        }
  };