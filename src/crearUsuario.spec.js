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
      it("Devuelve el password del usuario creado pepe", () => {
        let usuario=new Usuario("pepe","12pepeqw");
        expect(usuario.getPassword()).toEqual("12pepeqw");
      });
      it("Devuelve el password del usuario creado pepe", () => {
        let usuario=new Usuario("pepe","perroSalchichaGordoBachicha");
        expect(usuario.getPassword()).toEqual("perroSalchichaGordoBachicha");
      });
    }
  );

   