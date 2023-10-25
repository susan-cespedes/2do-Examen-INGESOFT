class Usuario{
    constructor(nombre="", password) {
        this.nombre = nombre;
        this.password = password;
    }
        getNombre(){
            return this.nombre;
        }
        getPassword(){
            return this.password;
        }
        validarNombre(){
            if(this.nombre == "")
                return false;
            else
                return true;
        }
  };

export default Usuario;