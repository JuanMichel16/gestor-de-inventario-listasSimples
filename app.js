import Inventario from './inventario.js';
import Producto from './producto.js';
import UI from './ui.js';

const ui = new UI();
const inventario = new Inventario();


const btnBorrarPrimerProducto = document.querySelector('#btnBorrarPrimerProducto');
const btnAgregarProductoFinal = document.querySelector('#agregar');
const btnAgregarProductoInicio = document.querySelector('#agregarInicio');
const btnAgregarProductoPosicion = document.querySelector('#agregarPosicion');
const btnBorrarProducto = document.querySelector('#btnEliminarProducto');
const formularioBuscar = document.querySelector('#formulario-buscar');
const btnListarProductos = document.querySelector('#btn1')
const btnListarProductosInvertido = document.querySelector('#btn2')

btnAgregarProductoFinal.addEventListener('click', agregarProductoFinal);
btnAgregarProductoInicio.addEventListener('click', agregarProductoInicio);
btnAgregarProductoPosicion.addEventListener('click', agregarProductoPosicion);
btnBorrarPrimerProducto.addEventListener('click', borrarPrimerProducto);
btnBorrarProducto.addEventListener('click', borrarArticulo);
formularioBuscar.addEventListener('submit', buscarProducto);
btnListarProductos.addEventListener('click', listarProductos);
// btnListarProductosInvertido.addEventListener('click', listarProductosInvertido);

// function listarProductosInvertido() {
//     validarDatos();
// }
// function listarProductos() {
//     validarDatos();
// }


function agregarProductoPosicion() {
    const producto = validarDatos();
    const posicion = document.querySelector('#posicion').value;

    inventario.agregarProductoPosicion(producto, posicion);

    ui.mostrarMensaje('El producto se ha agregado correectamente');
}


function validarDatos() {
    const codigo = document.querySelector('#codigo').value
    const nombre = document.querySelector('#nombre').value
    const descripcion = document.querySelector('#descripcion').value
    const cantidad = Number(document.querySelector('#cantidad').value)
    const costo = Number(document.querySelector('#costo').value)


    if(codigo === '' || nombre === '' || descripcion === '' || cantidad === '' || costo === '') {
        ui.mostrarMensaje('todos los espacios deben estar llenos', 'error');


        return;
    } else if( isNaN(cantidad) || cantidad <= 0 ) {
        ui.mostrarMensaje('Revise que se hayan llenado todos los espacios correctamente', 'error');

        return;
    } else if( isNaN(costo) || costo <= 0){
        ui.mostrarMensaje('Revise que se hayan llenado todos los espacios correctamente', 'error');

        return;
    } else {
        const producto = new Producto(codigo, nombre, descripcion, cantidad, costo);

        return producto;
    }

}

function agregarProductoInicio() {
    let producto = validarDatos();

    //Si el producto existe, lo va agregar!
    if(producto) {
        inventario.agregarProductoInicio(producto);
        ui.mostrarMensaje(`El articulo: ${producto.nombre}, con codigo ${producto.codigo} se ha agregado correctamente al inventario.`)
        console.log(inventario);
    };

}


function agregarProductoFinal() {
    let producto = validarDatos();

    //Si el producto existe, lo va agregar!
    if(producto) {
        inventario.agregarProducto(producto);
        ui.mostrarMensaje(`El articulo: ${producto.nombre}, con codigo ${producto.codigo} se ha agregado correctamente al inventario.`)
        console.log(inventario);
    };
}

function borrarPrimerProducto() {
    let productoEliminado = inventario.eliminarPrimerProducto();
    ui.mostrarMensaje(`Se ha eliminado con exito el producto ${productoEliminado.nombre}, con codigo ${productoEliminado.codigo}`);

    return;
}

function borrarArticulo(e) {
    e.preventDefault();

    const articulo = document.getElementById('codigoBorrar').value;
    let productoEliminado = inventario.eliminarProducto(articulo);

    console.log(productoEliminado);

    ui.mostrarMensaje(`Se ha eliminado con exito el producto ${productoEliminado.nombre} con codigo ${productoEliminado.codigo}`);
}

function buscarProducto(e) {
    e.preventDefault();

    const codigo = document.getElementById('codigoBuscar').value;
    let articuloEncontrado = inventario.buscarProducto(codigo);
    
    const {nombre} = articuloEncontrado;

    ui.mostrarMensaje(`Se ha encontrado con exito ${nombre} con codigo ${codigo}`)


}


function listarProductos() {
    inventario.listarProductos();
}