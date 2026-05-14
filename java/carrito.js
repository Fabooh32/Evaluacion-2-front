let carrito = [];
let total = 0;

// --- LÓGICA DEL SALUDO ---
window.onload = function() {
    let nombre = localStorage.getItem('usuario');
    let saludo = document.getElementById('saludoUsuario');
    if (nombre && saludo) {
        saludo.innerText = "¡Hola " + nombre + ", arma tu pedido!";
    }
};

// --- LÓGICA DEL CARRITO ---
function agregarAlCarro(nombre, precio) {
    document.getElementById('seccion-carrito').style.display = 'block';
    carrito.push({ nombre: nombre, precio: precio });
    total += precio;
    actualizarInterfaz();
}

function borrarUltimo() {
    if (carrito.length > 0) {
        let eliminado = carrito.pop(); // Quita el último
        total -= eliminado.precio; // Resta el precio
        
        if (carrito.length === 0) {
            document.getElementById('seccion-carrito').style.display = 'none';
        }
        actualizarInterfaz();
    }
}

function actualizarInterfaz() {
    const lista = document.getElementById('lista-items');
    const totalTxt = document.getElementById('precio-total');
    lista.innerHTML = "";

    carrito.forEach((item) => {
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `${item.nombre} <span>$${item.precio}</span>`;
        lista.appendChild(li);
    });
    totalTxt.innerText = total;
}

function finalizarCompra() {
    let nombre = localStorage.getItem('usuario') || "cliente";
    alert(`¡Gracias ${nombre}!\nTotal: $${total}\nTu café estará listo pronto.`);
    
    carrito = [];
    total = 0;
    actualizarInterfaz();
    document.getElementById('seccion-carrito').style.display = 'none';
}