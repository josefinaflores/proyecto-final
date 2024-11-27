 const menus = [{nombre: "Inicio", url: "index.html"},
    {nombre: "Contacto", url: "contacto.html"},
]

function cargarmenu() {
let enlaces = document.getElementById("ulmenu")
for (const menu of menus) {
let lista = document.createElement("li")
lista.innerHTML =`<a href=${menu.url}>${menu.nombre}</a>`;
enlaces.appendChild(lista);
}
}
cargarmenu()  

let productocarritos = JSON.parse(localStorage.getItem("carrito"));

function cargarcarrito() {
        let enlaces = document.getElementById("tablacar");
        for (const productocarrito of productocarritos) {
            let lista = document.createElement("tr");
            lista.id = `${productocarrito.id}`;
            lista.innerHTML = `
                <td><img src="${productocarrito.img}" width="50"></td>
                <td>${productocarrito.cantidad}</td>
                <td>${productocarrito.nombre}</td>
                <td>${productocarrito.precio}</td>
                <td>${productocarrito.cantidad * productocarrito.precio}</td>
                <td><button id="btneliminar" onclick="eliminarproducto('${productocarrito.id}')">x</button></td>
            `;
            enlaces.appendChild(lista);
        }
   
        let total = 0;
        let cantidadTotal = 0;
        for (const id in productocarritos) {
            let producto = productocarritos[id];
            total += producto.cantidad * producto.precio;
                cantidadTotal += producto.cantidad;
    }

    // Mostrar el total final
   // Mostrar el total final con el botón de pago
    let totalFila = document.createElement("tr");
    totalFila.innerHTML = `
    <td colspan="5" style="text-align: right;">Total Final: $${total}</td>
    <td>
        <button onclick="finalizarcompra()">Ir a pagar</button>
    </td>
    `;
    enlaces.appendChild(totalFila);

}
cargarcarrito();

function finalizarcompra(){
    alert("Su compra fue realizada")
}

function eliminarproducto(id) {
    let nodo = document.getElementById(id);
    nodo.remove();
    id = parseInt(id)
    productosActualizados = productocarritos.filter(producto => producto.id !== id);
    const enJSON    = JSON.stringify(productosActualizados);
    localStorage.setItem("carrito", enJSON)
}

function actualizarCarrito(totalProductos) {
    totalProductos = parseInt(totalProductos, 10);

    
    const cantidadCarritoElement = document.getElementById("cantidad-carrito");
    if (cantidadCarritoElement) {
        cantidadCarritoElement.textContent = totalProductos;
    }
}