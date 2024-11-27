const menus = [{nombre: "Inicio", url:"index.html"},
    {nombre: "Contacto", url:"contacto.html"},
]

function cargarelmenu(){
    let enlances = document.getElementById('ulmenu')
    for (const menu of menus){
        let lista = document.createElement("li")
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`
        enlances.appendChild(lista)
    }
}

cargarelmenu()

const productos = [
    {nombre:"Anteojos", precio:"5000", img:"img/anteojos.jpg", id: 1},
    {nombre:"Aritos", precio:"3000", img:"img/aritos.jpg", id: 2},
    {nombre:"Pulseras", precio:"4000", img:"img/pulseras.jpg", id: 3},
]

function cargarproductos(){
    let ventas = document.getElementById('boxprductos')
        for (const producto of productos){
            let contenedor = document.createElement("div")
            contenedor.innerHTML = `<div id="boxproducto">
                <h3>${producto.nombre}</h3>
                <img src=${producto.img} alt="">
                <p>$${producto.precio}</p>
                <button onclick = "verdetalle('${producto.id}')">Detalles</button>
            </div>`
            ventas.appendChild(contenedor)
        }
}

cargarproductos()

function verdetalle(idproducto) {
    const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto)); 
    const enJSON = JSON.stringify(buscarProducto)
    localStorage.setItem("detalleproducto", enJSON)
    window.location.href = "detalle.html"
}