// 1. EVENTO CLICK — Cambiar texto

const boton = document.getElementById("btnCambiar");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", function() {
    titulo.textContent = "¡Has hecho clic!";
});


// 2. EVENTO MOUSEOVER — Cambiar color

const caja = document.getElementById("caja");

caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "blue";
});


// 3. EVENTO KEYDOWN — Detectar tecla

document.addEventListener("keydown", function(evento) {
    document.getElementById("tecla").textContent =
        "Presionaste: " + evento.key;
});


// 4. EVENTO INPUT — Contar caracteres

const texto = document.getElementById("texto");
const contador = document.getElementById("contador");

texto.addEventListener("input", function() {
    contador.textContent = "Caracteres: " + texto.value.length;
});


// 5. EVENTO SUBMIT — Validar formulario

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Debes escribir tu nombre");
    } else {
        alert("¡Hola " + nombre + "!");
    }

});