// Extiende la clase Usuario para que contenga las siguiente propiedades:
// Públicas: id, nombre, edad, email, teléfono, activo
// Privadas: password
// Para la carga de los datos utilizaremos un formulario que contega todas las propiedades 
// (el usuario debe escribir 2 veces la password), 
// junto con un botón "Guardar", el cuál disparará la obtención de los datos. 
// Finalmente, se debe agegar el objeto del usuario cargado a un Array que comenzará vacío.

// Utilizar CSS para estilos, preferentemente TailwindCSS. Realizar validaciones.

import Usuario from "./classes/Usuario.js"

const formulario = document.getElementById("formulario")
const btnGuardar = document.getElementById("btnGuardar")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const activo = document.getElementById("activo")
const error = document.getElementById("error")
const usuariosList = document.getElementById("usuarios")
const listaUsuarios = []


formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const valorNombre = nombre.value.trim()
    const valorEdad = parseInt(edad.value.trim())
    const valorEmail = email.value.trim()
    const valorTelefono = telefono.value.trim()
    const valorActivo = activo.checked
    const valorPassword = password.value.trim()
    const valorPassword2 = password2.value.trim()

    if (valorNombre === "" || isNaN(valorEdad) || valorEmail === "" || valorTelefono === "" || valorPassword === "" || valorPassword2 === "") {
        error.textContent = "Todos los campos son obligatorios"
        error.classList.remove("hidden")
        return
    } else {
        registrarUsuario({ nombre: valorNombre, 
            edad: valorEdad, 
            email: valorEmail, 
            telefono: valorTelefono, 
            activo: valorActivo, 
            password: valorPassword, 
            password2: valorPassword2 })
    }

})

function renderUsuarios() {
    usuariosList.innerHTML = ""
    listaUsuarios.forEach(usuario => {
        const li = document.createElement("li")
        li.className = "border border-gray-300 rounded-lg p-2"
        li.innerHTML = `<div> 
        <p class="font-bold">Nombre: ${usuario.nombre} <span class="text-sm text-gray-500">ID: ${usuario.id}</span></p>
        <p class="text-sm">Edad: ${usuario.edad} | Teléfono: ${usuario.telefono} | Email: ${usuario.email} | Activo: ${usuario.activo ? "Sí" : "No"}</p>
        </div>`
        usuariosList.appendChild(li)
    })
}

function registrarUsuario(datos) {
    try {
        if (datos.password !== datos.password2) {
            throw new Error("Las contraseñas no coinciden")
        }

        if (listaUsuarios.some(usuario => usuario.email === datos.email)) {
            throw new Error("El email ya está registrado")
        }

        const idGenerado = Math.floor(Math.random() * 1000)
        const usuario = new Usuario(
            idGenerado,
            datos.nombre,
            datos.edad,
            datos.email,
            datos.telefono,
            datos.activo,
            datos.password)
        listaUsuarios.push(usuario)
        renderUsuarios()
        // console.log("usuario agregado:", usuario)
        // console.log("lista completa:", listaUsuarios)

        formulario.reset()
        error.textContent = ""
        error.classList.add("hidden")

    } catch (err) {
        error.textContent = err.message
        error.classList.remove("hidden")

    }
}



