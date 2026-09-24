// Extiende la clase Usuario para que contenga las siguiente propiedades:

// Públicas: id, nombre, edad, email, teléfono, activo
// Privadas: password

// Para la carga de los datos utilizaremos un formulario que contega todas las propiedades 
// (el usuario debe escribir 2 veces la password), 
// junto con un botón "Guardar", el cuál disparará la obtención de los datos. 
// Finalmente, se debe agegar el objeto del usuario cargado a un Array que comenzará vacío.

// Utilizar CSS para estilos, preferentemente TailwindCSS. Realizar validaciones.

// A. Clase Usuario (classes/Usuario.js)

// La clase debe estar modularizada (utilizando export / import de ES6) y contar
// con las siguientes propiedades:

//   - Propiedades Públicas:
//       - id (puede ser autoincremental o generado dinámicamente)
//       - nombre (string)
//       - edad (number)
//       - email (string)
//       - telefono (string)
//       - activo (boolean)
//   - Propiedad Privada:
//       - password (string)
class Usuario {
    id
    nombre
    edad
    email
    telefono
    activo
    #password

    constructor(id,nombre, edad,email, telefono, activo, password) {
        if (typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
            throw new Error("El email ingresado no es válido")
        }
        if (typeof password !== "string" || password.length < 8) {
            throw new Error("La contraseña debe tener al menos 8 caracteres")
        }

        if(typeof edad !== "number" || edad <= 0 || edad > 99) {
            throw new Error("La edad ingresada no es válida, debe ser un número entre 1 y 99")
        }

        if(typeof telefono !== "string" || telefono.length < 8) {
            throw new Error("El teléfono ingresado no es válido, debe tener al menos 8 caracteres")
        }
        
        this.id = id
        this.nombre = nombre
        this.edad = edad
        this.email = email
        this.telefono = telefono
        this.activo = activo
        this.#password = password
    }

}

export default Usuario;