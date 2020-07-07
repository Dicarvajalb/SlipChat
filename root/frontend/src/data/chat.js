//Sector prueba

const heap = require('../structures/Heap.js')

const Score = require('./userPoints.js')

var h1 = new heap(10)

var u1 = new Score("Diego3", 100)
var u2 = new Score("Diego3", 9)
var u3 = new Score("Diego3", 1)

for(let i = 0;i<10 ; i++){
  var u = new Score('Diego' + i, i)
  h1.insert(u)
}
h1.poll();
h1.poll();
h1.poll();
h1.poll();
h1.poll();
h1.poll();

console.log(h1)