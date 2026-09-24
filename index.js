import Usuario from "./classes/Usuario.js";

const formulario = document.getElementById("formulario");
const btnGuardar = document.getElementById("btnGuardar");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const activo = document.getElementById("activo");
const error = document.getElementById("error");
const usuariosList = document.getElementById("usuarios");
const listaUsuarios = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorNombre = nombre.value.trim();
  const valorEdad = parseInt(edad.value.trim());
  const valorEmail = email.value.trim();
  const valorTelefono = telefono.value.trim();
  const valorActivo = activo.checked;
  const valorPassword = password.value.trim();
  const valorPassword2 = password2.value.trim();

  registrarUsuario({
    nombre: valorNombre,
    edad: valorEdad,
    email: valorEmail,
    telefono: valorTelefono,
    activo: valorActivo,
    password: valorPassword,
    password2: valorPassword2,
  });
});

function renderUsuarios() {
  usuariosList.innerHTML = "";
  listaUsuarios.forEach((usuario) => {
    const tr = document.createElement("tr");
    tr.className = "border-b text-sm text-gray-700";
    tr.innerHTML = `
            <td class="p-2 text-center font-medium">${usuario.id}</td>
            <td class="p-2 whitespace-nowrap">${usuario.nombre}</td>
            <td class="p-2 text-center">${usuario.edad}</td>
            <td class="p-2 whitespace-nowrap">${usuario.telefono}</td>
            <td class="p-2 break-all">${usuario.email}</td>
            <td class="p-2 text-center">${usuario.activo ? "Sí" : "No"}</td>
        `;
    usuariosList.appendChild(tr);
  });
}

function registrarUsuario(datos) {
  try {
    if (
      datos.nombre === "" ||
      isNaN(datos.edad) ||
      datos.email === "" ||
      datos.telefono === "" ||
      datos.password === "" ||
      datos.password2 === ""
    ) {
      throw new Error("Todos los campos son obligatorios");
    }

    if (datos.password !== datos.password2) {
      throw new Error("Las contraseñas no coinciden");
    }

    if (listaUsuarios.some((usuario) => usuario.email === datos.email)) {
      throw new Error("El email ya está registrado");
    }

    const idGenerado = Math.floor(Math.random() * 1000);
    const usuario = new Usuario(
      idGenerado,
      datos.nombre,
      datos.edad,
      datos.email,
      datos.telefono,
      datos.activo,
      datos.password,
    );
    listaUsuarios.push(usuario);
    renderUsuarios();

    formulario.reset();
    error.textContent = "";
    error.classList.add("hidden");
  } catch (err) {
    error.textContent = err.message;
    error.classList.remove("hidden");
  }
}
