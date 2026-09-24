class Usuario {
  id;
  nombre;
  edad;
  email;
  telefono;
  activo;
  #password;

  constructor(id, nombre, edad, email, telefono, activo, password) {
    if (
      typeof email !== "string" ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      throw new Error("El email ingresado no es válido");
    }
    if (typeof password !== "string" || password.length < 8) {
      throw new Error("La contraseña debe tener al menos 8 caracteres");
    }

    if (typeof edad !== "number" || edad <= 0 || edad > 99) {
      throw new Error(
        "La edad ingresada no es válida, debe ser un número entre 1 y 99",
      );
    }

    if (typeof telefono !== "string" || telefono.length < 8) {
      throw new Error(
        "El teléfono ingresado no es válido, debe tener al menos 8 caracteres",
      );
    }

    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
    this.activo = activo;
    this.#password = password;
  }
}

export default Usuario;
