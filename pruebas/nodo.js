const Nodo = require("../src/Nodo.js")

const nodo1 = new Nodo({
    fecha: "02/02",
    motivo: "vacunacion",
    veterinario: "Dra. Rios",
    costo: 85000,

})
const nodo2 = new Nodo({
    fecha: "15/03",
    motivo: "control de peso",
    veterinario: "Dr. Gomez",
    costo: 40000,

});
const nodo3 = new Nodo({
    fecha: "20/05",
    motivo: "limpieza dental",
    veterinario: "Dra. Rios",
    costo: 150000,

});

const cabeza = nodo1;
nodo1.next = nodo2;
nodo2.next = nodo3;
nodo3.next = null;

let actual = cabeza;
while (actual !== null) {
    console.log(actual.data);
    actual = actual.next;
}
actual = cabeza;
let totalcosto = 0
while (actual !== null) {
    totalcosto += actual.data.costo;
    actual = actual.next;
}
console.log("El costo total es: " + totalcosto);

