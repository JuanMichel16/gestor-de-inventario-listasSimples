import UI from './ui.js'

const ui = new UI();

const formularioAgregar = document.querySelector('#formulario-agregar');
const formularioBorrar =  document.querySelector('#formulario-borrar');
const formularioBuscar = document.querySelector('#formulario-buscar');

formularioAgregar.addEventListener('submit', validarDatos);
// formularioBorrar.addEventListener('submit', )
// formularioBuscar.addEventListener('submit', )

function validarDatos(e) {
    e.preventDefault();

    const codigo = document.querySelector('#codigo').value
    const nombre = document.querySelector('#nombre').value
    const descripcion = document.querySelector('#descripcion').value
    const cantidad = Number(document.querySelector('#cantidad').value)
    const costo = Number(document.querySelector('#costo').value)


    if(codigo === '' || nombre === '' || descripcion === '' || cantidad === '' || costo === '') {
        ui.mostrarMensaje('todos los espacios deben estar llenos', 'error');
    } else if( isNaN(cantidad) || cantidad < 0 ) {
        ui.mostrarMensaje('Revise que se hayan llenado todos los espacios correctamente', 'error');
    } else if( isNaN(costo) || costo <=0){
        ui.mostrarMensaje('Revise que se hayan llenado todos los espacios correctamente', 'error');
    } else {
        console.log('El producto se ha creado correctamente');
    }



}