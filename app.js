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
btnListarProductosInvertido.addEventListener('click', listarProductosInvertido);

function listarProductosInvertido() {
    validarDatos();
}
function listarProductos() {
    validarDatos();
}


function agregarProductoPosicion() {
    const producto = validarDatos();
    const posicion = document.querySelector('#posicion').value;

    inventario.agregarProductoPosicion(producto, posicion);
}


function validarDatos() {

    const codigo = document.querySelector('#codigo').value
    const nombre = document.querySelector('#nombre').value
    const descripcion = document.querySelector('#descripcion').value
    const cantidad = Number(document.querySelector('#cantidad').value)
    const costo = Number(document.querySelector('#costo').value)


    if(codigo === '' || nombre === '' || descripcion === '' || cantidad === '' || costo === '') {
        ui.mostrarMensaje('todos los espacios deben estar llenos', 'error');
    } else if( isNaN(cantidad) || cantidad <= 0 ) {
        ui.mostrarMensaje('Revise que se hayan llenado todos los espacios correctamente', 'error');
    } else if( isNaN(costo) || costo <=0){
        ui.mostrarMensaje('Revise que se hayan llenado todos los espacios correctamente', 'error');
    } else {
        const producto = new Producto(codigo, nombre, descripcion, cantidad, costo);

        return producto
    }
}

function agregarProductoInicio() {
    let producto = validarDatos();

    inventario.agregarProductoInicio(producto);
}


function agregarProductoFinal() {
    let producto = validarDatos();

    inventario.agregarProducto(producto);
    ui.mostrarMensaje('El articulo se ha agregado correctamente al inventario.', 'correcto')
    console.log(inventario);
}

function borrarPrimerProducto() {
    let productoEliminado = inventario.eliminarPrimerProducto();

}

function borrarArticulo(e) {
    e.preventDefault();

    const articulo = document.getElementById('codigoBorrar').value;
    console.log(inventario.eliminarProducto(articulo));
}

function buscarProducto(e) {
    e.preventDefault();

    const articulo = Number(document.getElementById('codigoBuscar').value);
    console.log(inventario.buscarProducto(articulo));
}