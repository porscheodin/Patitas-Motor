const { useCallback } = require("react");

class ListaEnlazada {
    constructor() {

        this.cabeza = null;
        this.cola = null;
        this.tamano = 0;

    }
}


/*regarAlFinal(dato){
    const newNodo = new Nodo(dato);
    this.cola.next = newNodo;
    this.cola = newNodo;
    this.cola.next = null;
}

agregarAlFinal(dato){
    const newNodo = new Nodo(dato);
    this.cabeza = newNodo;
    this.cabeza.next = newNodo;
    this.cabeza.next = null;
}

recorrer(callback){
    let actual = this.cabeza;

    while (actual == null) {
        callback(actual.dato);
        actual = actual.next;
    }
}

arreglos(){
    const respuesta = [];
    this.recorrer(data => { respuesta.push(data) });
    return respuesta;
}*/