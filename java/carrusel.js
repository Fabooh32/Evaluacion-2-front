const imagenes = [
    "../resources/cafes/cafe expresso.png",
    "../resources/cafes/cafe2.png",
    "../resources/cafes/Captura de pantalla 2026-05-13 125055.png"
];

let i = 0;
const visor = document.getElementById('visor');

// Función para actualizar la imagen
function actualizarImagen() {
    visor.style.opacity = 0; // Efecto de parpadeo simple
    setTimeout(() => {
        visor.src = imagenes[i];
        visor.style.opacity = 1;
    }, 200);
}

document.getElementById('next').onclick = function() {
    i++;
    if (i >= imagenes.length) i = 0;
    actualizarImagen();
};

document.getElementById('prev').onclick = function() {
    i--;
    if (i < 0) i = imagenes.length - 1;
    actualizarImagen();
};


function guardar() {
    let nombre = document.getElementById('inputNombre').value;
    localStorage.setItem('usuario', nombre); // Lo guarda en la memoria
    document.getElementById('saludo').innerText = "Hola " + nombre;
}

// Esto se ejecuta automáticamente cuando se refresca la página
window.onload = function() {
    // 1. Buscamos si existe algo guardado con la clave 'usuario'
    let nombreGuardado = localStorage.getItem('usuario');

    // 2. Si existe (no es null), lo ponemos en el párrafo
    if (nombreGuardado) {
        document.getElementById('saludo').innerText = "Hola " + nombreGuardado;
    }
};