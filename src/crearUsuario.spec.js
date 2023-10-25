import Usuario from "./Usuario";
describe("Crear usuarios version basica", () => {
      it("Devuelve el username del usuario creado", () => {
        let usuario=new Usuario("pepe");
        expect(usuario.getNombre()).toEqual("pepe");
      });
      it("Devuelve el username del usuario creado usuario juancho", () => {
        let usuario=new Usuario("juancho");
        expect(usuario.getNombre()).toEqual("juancho");
      });
    }
  );

   