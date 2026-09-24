# Gestión de usuario

Este proyecto consiste en una aplicación web interactiva desarrollada como parte de la evaluación práctica de JavaScript y manipulación del DOM. Permite registrar nuevos usuarios a través de un formulario con validaciones en tiempo real y mostrarlos dinámicamente en una tabla.

Integrantes: Sofia Aguilar - Aldana Gonzalez - Cecilia Rodriguez

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la interfaz.
* **Tailwind CSS:** Estilos visuales y diseño responsive.
* **JavaScript (ES6 Modules):** Lógica del cliente, POO (Programación Orientada a Objetos) y manipulación del DOM.

---

## 📁 Estructura del Proyecto

```text
├── index.html          # Interfaz de usuario (Formulario y Tabla)
├── index.js            # Lógica principal del DOM y manejo de eventos
├── styles.css          # Importación y configuración de estilos
└── classes/
    └── Usuario.js      # Clase con la definición y validaciones del modelo Usuario

⚙️ Funcionalidades Principales

1. Clase Usuario (/classes/Usuario.js)
Encapsulamiento: Contraseña privada (#password) accesible únicamente mediante métodos de la clase para evitar su exposición.

Validaciones internas:

Email: Formato válido (debe contener @ y .).
Contraseña: Mínimo de 8 caracteres.
Edad: Valor numérico entre 1 y 99 años.
Teléfono: Mínimo de 8 caracteres numéricos.
Métodos: Incluye método estático de creación y función para cambiar contraseña (cambiarPin).

2. Formulario y Validaciones (index.js)
Validación en tiempo real para evitar campos vacíos.
Confirmación de coincidencia de contraseñas.
Verificación de unicidad de email (no permite registrar correos duplicados).
Manejo transparente de errores mediante bloque try...catch.

3. Almacenamiento y Renderizado Dinámico
Estado local: Mantiene los registros en una lista dinámica (listaUsuarios).
Tabla interactiva: Genera filas de forma dinámica utilizando createElement e innerHTML.
Privacidad: Exposición única de datos públicos (ID, Nombre, Edad, Teléfono, Email, Estado). La contraseña jamás se renderiza en el DOM.
Limpieza: Reseteo automático del formulario tras un registro exitoso (formulario.reset()).