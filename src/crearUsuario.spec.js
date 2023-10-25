import {Usuario} from "./Usuario";
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
  describe("Validar Campos Usuario", () => {
    it("Valida nombre de usuario ingresado sin nombre", () => {
      let usuario=new Usuario();
      expect(usuario.validarNombre()).toEqual(false);
    });
    it("Valida nombre de usuario ingresado con nombre", () => {
        let usuario=new Usuario("pepe");
        expect(usuario.validarNombre()).toEqual(true);
    });
    it("Valida password de usuario ingresado sin password", () => {
        let usuario=new Usuario();
        expect(usuario.validarPassword()).toEqual(false);
    });
    it("Valida password de usuario ingresado con password", () => {
        let usuario=new Usuario("pepe","12pepeqw");
        expect(usuario.validarPassword()).toEqual(true);
    });
    it("Valida todos los campos del usuario sin campos", () => {
      let usuario=new Usuario();
      expect(usuario.validarCampos()).toEqual(false);
  });
  it("Valida todos los campos del usuario con campos", () => {
    let usuario=new Usuario("pepe","123");
    expect(usuario.validarCampos()).toEqual(true);
});
  }
);
   