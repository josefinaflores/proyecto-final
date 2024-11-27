const menus = [{nombre: "Inicio", url:"index.html"},
    {nombre: "Contacto", url:"contacto.html"},
]

function cargarelmenu(){
    let enlances = document.getElementById("ulmenu")
    for (const menu of menus){
        let lista = document.createElement("li")
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`
        enlances.appendChild(lista)
    }
}

cargarelmenu()

let productodetalle = JSON.parse(localStorage.getItem("detalleproducto"));

function cargarproducto() {
    let ventas = document.getElementById('boxprducto');
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
        <h3>${productodetalle.nombre}</h3>
            <img src="${productodetalle.img}" alt="">
            <p>$${productodetalle.precio}</p>
            <div id="contar">
                <button onclick="sumar()">+</button>
                <p id="contarproducto">0</p>
                <button onclick="restar()">-</button>
            </div>
            <button onclick="cargarcarrito()">Agregar al carrito</button>`;
    ventas.appendChild(contenedor);
}

cargarproducto();

let contador = 0;

function sumar() {
    contador = contador + 1;
    document.getElementById('contarproducto').innerHTML = contador;
}

function restar() {
    if (contador > 0) {
        contador = contador - 1;
        document.getElementById('contarproducto').innerHTML = contador;
    }
}


function cargarcarrito() {
    if (contador===0){
        alert("Por favor, ingrese la cantidad de productos deseados")
    }else{
        let carrito = JSON.parse(localStorage.getItem("carrito"))

        if (carrito === null){
            carrito = []
        }

        cantidadproducto = parseInt(document.getElementById("contarproducto").innerHTML);
        productonuevo = {id: productodetalle.id,
            nombre:productodetalle.nombre,
            cantidad: cantidadproducto,
            precio: productodetalle.precio,
            img: productodetalle.img
        }

    carrito.push(productonuevo)
    const enJSON = JSON.stringify(carrito)
    localStorage.setItem("carrito", enJSON)
    window.location.href = "carrito.html"
    }
}