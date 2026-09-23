// Extiende la clase Usuario para que contenga las siguiente propiedades:

// Públicas: id, nombre, edad, email, teléfono, activo
// Privadas: password

// Para la carga de los datos utilizaremos un formulario que contega todas las propiedades 
// (el usuario debe escribir 2 veces la password), 
// junto con un botón "Guardar", el cuál disparará la obtención de los datos. 
// Finalmente, se debe agegar el objeto del usuario cargado a un Array que comenzará vacío.

// Utilizar CSS para estilos, preferentemente TailwindCSS. Realizar validaciones.

class Usuario {
    id
    nombre
    email
    edad
    telefono
    activo
    #password

    constructor(id,nombre, edad, telefono,email, activo, password) {
        if (typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
            throw new Error("El email ingresado no es válido")
        }
        if (typeof password !== "string" || password.length < 8) {
            throw new Error("La contraseña debe tener al menos 8 caracteres")
        }
        
        this.id = id
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.email = email
        this.activo = activo
        this.#password = password
    }

    static crear(id,nombre, edad,telefono,email, activo, password) {
        return new Usuario(id,nombre, edad, telefono, email, activo, password)
    }

    cambiarPin(passwordActual, passwordNuevo) {
        if (passwordActual === this.#password &&
            typeof passwordNuevo === "string" &&
            passwordNuevo.length >= 8) {
            this.#password = passwordNuevo
            return true
        }
        return false


    }
}

export default Usuario;