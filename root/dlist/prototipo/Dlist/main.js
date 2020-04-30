"use strict";
const Dlist = require('./Dlist');
const Cuenta = require('../Cuenta');
/*
function post(data, url){
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: function (){ console.log("success")},
        error: function() { console.log("error")}    
    })
}*/

let n = 10000000;
let a = "prueba " + n.toString() + " datos";
let cuentas = new Dlist;
//let url ='http://localhost:3000/cuentas';
/*
console.time(a);
console.timeEnd(a);
*/
//let cuentaact = new Cuenta("mateo", "abcd1234");

for (let i = 0; i < n; i++) {
    let cuenta = new Cuenta("name" + i, "password" + i);
    cuentas.pushBack(cuenta);
}

console.time(a);
    cuentas.remove(0);
    //cuentas.find("name"+(n-1));
console.timeEnd(a);