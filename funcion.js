// Array de menús, cada uno con un nombre y una URL
const menus = [
    {nombre: "inicio", url: "index.html"}, // Menú de inicio
    {nombre: "¿Quienes somos?", url: "quienes.html"}, // Menú "Quiénes somos"
    {nombre: "contacto", url: "contacto.html"} // Menú de contacto
];

// Función para cargar los menús dinámicamente
function cargarmenu() {
    let enlaces = document.getElementById("ulmenu"); // Obtiene el elemento <ul> con id "ulmenu"
    if (!enlaces) {
        console.error("No se encontró el elemento con id 'ulmenu'");
        return;
    }
    for (const menu of menus) { // Recorre cada objeto del array menus
        let lista = document.createElement("li"); // Crea un elemento <li> para cada menú
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`; // Inserta el enlace dentro del <li>
        enlaces.appendChild(lista); // Agrega el <li> al <ul>
    }
}

// Array de productos, cada uno con nombre, precio, imagen y un identificador único
const productos = [
    {nombre: "Anteojos", precio: "5000", img: "img/foto1.jpg", id: "1", stock: 7}, // Producto 1
    {nombre: "Collar", precio: "3000", img: "img/foto2.jpg", id: "2", stock: 3}, // Producto 2
    {nombre: "Aritos", precio: "2000", img: "img/foto3.jpg", id: "3", stock: 6} // Producto 3
];

// Función para cargar los productos dinámicamente
function cargarproductos() {
    let ventas = document.getElementById("boxproductos"); // Obtiene el elemento donde se mostrarán los productos
    if (!ventas) {
        console.error("No se encontró el elemento con id 'boxproductos'");
        return;
    }
    for (const producto of productos) { // Recorre cada objeto del array productos
        let contenedor = document.createElement("div"); // Crea un contenedor <div> para cada producto
        contenedor.innerHTML = `
            <div id="boxproducto"> <!-- Caja del producto -->
                <h3>${producto.nombre}</h3> <!-- Nombre del producto -->
                <img src="${producto.img}" alt="" width=200px> <!-- Imagen del producto -->
                <p>$ ${producto.precio}</p> <!-- Precio del producto -->
                <button onclick="verdetalle('${producto.id}')">Detalle</button> <!-- Botón de detalles -->
            </div>`;
        ventas.appendChild(contenedor); // Agrega el contenedor al elemento padre
    }
}

// Función para ver los detalles de un producto seleccionado
function verdetalle(idproducto) {
    const buscarproducto = productos.find(producto => producto.id === idproducto); // Busca el producto por su id
    if (!buscarproducto) {
        console.error("Producto no encontrado");
        return;
    }
    const enJSON = JSON.stringify(buscarproducto); // Convierte el producto a formato JSON
    localStorage.setItem("detalleproducto", enJSON); // Guarda el producto en el Local Storage
    window.location.href = "detalle.html"; // Redirige a la página de detalles
}

// Función para actualizar el carrito
function actualizarCarrito() {
    // Recuperar la cantidad desde localStorage
    let cantidadTotal = parseInt(localStorage.getItem("cantidadCarrito"), 10) || 0;

    // Actualizar el contador en el ícono del carrito
    const cantidadCarritoElement = document.getElementById("cantidad-carrito");
    if (cantidadCarritoElement) {
        cantidadCarritoElement.textContent = cantidadTotal;
    }
}

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
window.addEventListener('DOMContentLoaded', function() {
    cargarmenu();
    cargarproductos();
    actualizarCarrito();
});
