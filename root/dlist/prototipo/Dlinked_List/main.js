const DlinkedList = require('./DlinkedList');
const Cuenta = require('../Cuenta');

// Cantidad datos de prueba n = 10k, 100k, 500k, 1M, 10M
let n = 10000000;


// Inserción de datos
console.time("Inserción de datos n = " + n.toString());
let cuentas = new DlinkedList();
for(let i = 0; i<n; i++){
    let cuenta = new Cuenta("name" + i, "password" + i);
    cuentas.pushBack(cuenta);
}
console.timeEnd("Inserción de datos n = " + n.toString());


//Actualización de un dato
let usuario = new Cuenta("nickname", "cdfvq4t6uqreh@");
console.time("Actualización de un dato con n =" + n.toString());
cuentas.set("name" + n-1, usuario);
console.timeEnd("Actualización de un dato con n =" + n.toString());


//Eliminacion de un dato
console.time("Eliminacion de un dato con n =" + n.toString());
cuentas.erase("name" + n-1);
console.timeEnd("Eliminacion de un dato con n =" + n.toString());


//Busqueda parcial
console.time("Busqueda parcial de un dato con n =" + n.toString());
cuentas.find("name"+n-1);
console.timeEnd("Busqueda parcial de un dato con n =" + n.toString());


//Consulta
console.time("Consulta de un dato con n =" + n.toString());
cuentas.get(n-1);
console.timeEnd("Consulta de un dato con n =" + n.toString());