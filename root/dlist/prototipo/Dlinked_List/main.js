const DlinkedList = require('./DlinkedList');
const Cuenta = require('../Cuenta');

let n = 10000000;
let a = "prueba "+n.toString()+" datos";
let cuentas = new DlinkedList();
/*
console.time(a);
console.timeEnd(a);
*/
for(let i = 0; i<n; i++){
    let cuenta = new Cuenta("name" + i, "password" + i);
    cuentas.pushBack(cuenta);
}

console.time(a);
cuentas.get(n-1);
console.timeEnd(a);
/*
let cnew = new Cuenta("Mateo", "12345678");

cuentas.set("name"+(n-1), cnew);
console.time(a);
cuentas.find("Mateo");
console.timeEnd(a);
//recorrer lista
*/
/*
let aux = cuentas.head;
while(aux != null){
    console.log(aux.key);
    aux=aux.next;
}
console.log(" ");

/*console.log('****************');
console.log(cuentas.topBack().key);*/