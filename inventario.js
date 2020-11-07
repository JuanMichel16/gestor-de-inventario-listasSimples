export default class Inventario {
    constructor() {
        this._inicio = null;
    }


    agregarProductoInicio(nuevoProducto) {

        console.log(nuevoProducto);
        if(this._inicio === null) {
            this._inicio = nuevoProducto
        } else {
            nuevoProducto._siguiente = this._inicio;
            this._inicio = nuevoProducto;
        }
    }
    agregarProducto(nuevoProducto) {

        if(this._inicio === null) {
            this._inicio = nuevoProducto

            return;
        } else {
            let aux = this._inicio;

            while(aux.siguiente !== null) {
                aux = aux.siguiente;
            }

            aux._siguiente = nuevoProducto;
            return;
        }
    }

    //Corregirle
    agregarProductoPosicion(nuevoProducto, posicion) {
        let aux = this._inicio
        let aux2 = 0;
        // console.log(aux)

        for(let i = 1; i <= posicion; i++) {
            aux2 = aux;
            aux = aux._siguiente;
        }

        nuevoProducto._siguiente = aux;
        aux2._siguiente = nuevoProducto;

        // nuevoProducto.siguiente = aux.siguiente;
        // while(aux.siguiente) {
        //     console.log(aux);

        //     aux = aux.siguiente;
        // }
    }


    eliminarProducto(codigo) {
        let elementoBorrado;

        if(this._inicio.codigo === codigo) {
            this._inicio = this._inicio._siguiente
        } else {
            let aux = this._inicio;

            while(aux._siguiente._codigo !== codigo) {
                aux = aux._siguiente;
            }
            elementoBorrado = aux._siguiente;
            aux._siguiente = aux._siguiente._siguiente
        }

        return elementoBorrado;
    }

    eliminarPrimerProducto() {
        let productoEliminado;

        if(this._inicio._siguiente === null) {
            productoEliminado = this._inicio;
            this._inicio = null

            return productoEliminado;
        } else {
            productoEliminado = this._inicio;
            this._inicio = this._inicio._siguiente
    
            return productoEliminado;
        }
    }


    buscarProducto(codigo) {
        let aux = this._inicio;

        while(aux.codigo !== codigo) {
            aux = aux.siguiente;
        }

        return aux
    }


}