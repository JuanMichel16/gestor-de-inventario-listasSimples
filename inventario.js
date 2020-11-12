export default class Inventario {
    constructor() {
        this.inicio = null;
    }


    agregarProductoInicio(nuevoProducto) {

        if(this.inicio === null) {
            this.inicio = nuevoProducto

        } else {
            nuevoProducto.siguiente = this.inicio;
            this.inicio = nuevoProducto;
        }
    }
    agregarProducto(nuevoProducto) {

        if(this.inicio === null) {
            this.inicio = nuevoProducto

            return;
        } else {
            let aux = this.inicio;

            while(aux.siguiente !== null) {
                aux = aux.siguiente;
            }

            aux.siguiente = nuevoProducto;
            return;
        }
    }

    //Corregirle
    agregarProductoPosicion(nuevoProducto, posicion) {
        let aux = this.inicio
        let aux2 = 0;
        // console.log(aux)

        for(let i = 1; i <= posicion; i++) {
            aux2 = aux;
            aux = aux.siguiente;
        }

        nuevoProducto.siguiente = aux;
        aux2.siguiente = nuevoProducto;

        // nuevoProducto.siguiente = aux.siguiente;
        // while(aux.siguiente) {
        //     console.log(aux);

        //     aux = aux.siguiente;
        // }
    }


    eliminarProducto(codigo) {
        let elementoBorrado;
        let aux = this.inicio;

        if(aux.codigo === codigo) {
            elementoBorrado = aux;
            this.inicio = aux.siguiente

            return elementoBorrado;
        } else {
            //Profe aca ya no supe hacer la validacion para darle como siguiente un null a un producto que era el antepenultimo del que borre.
            aux = aux.siguiente;
            while(aux.codigo !== codigo) {
                aux = aux.siguiente;
            }

            elementoBorrado = aux
            aux.siguiente = aux.siguiente.siguiente;

            return elementoBorrado;
        }
    }

    eliminarPrimerProducto() {
        let productoEliminado;

        if(this.inicio.siguiente === null) {
            productoEliminado = this.inicio;
            this.inicio = null

            return productoEliminado;
        } else {
            productoEliminado = this.inicio;
            this.inicio = this.inicio.siguiente
    
            return productoEliminado;
        }
    }


    buscarProducto(codigo) {
        let aux = this.inicio;

        while(aux.codigo !== codigo) {
            aux = aux.siguiente;
        }

        return aux;
    }


    listarProductos() {
        let aux = this.inicio;

        if(aux.siguiente === null) {
            console.log(aux);
        } else {

            while(aux.siguiente !== null) {
                aux = aux.siguiente;
                console.log(aux)
            }
        }
    }
}