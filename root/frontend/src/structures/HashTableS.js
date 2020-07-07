const HashNode = require("./HashNode")
const Dlist = require("./Dlist.js")
class HashTable{

  constructor(Capacity, p){
    this.capacity = Capacity
    this.table = new Array(Capacity)
    this.elements = 0
    this.p = p
    this.a = Math.floor(Math.random() * (p-1)) + 1
    this.b = Math.floor(Math.random() * (p-1)) + 1
    this.x = Math.floor(Math.random() * (p-1)) + 1
  }
  getIndex(k){
    var index = 0;
    if (typeof k === "string") {
      index = this.hashInt(this.polyhash(k))
    }
    else if(typeof k === "number"){
      index = this.hashInt(k)
    }
    else{
      console.log("?????")
    }
    return index
  }

  insert(k, v){
    var index = this.getIndex(k)
    var alive = this.table[index]

    if(alive == undefined){
      this.table[index] = new HashNode(v,k)
      this.elements++
    }
    
    while(alive != undefined){
      if(alive.key === k){
        
        alive.value = v
        break;
      }
      if(alive.next === undefined){
        alive.next = new HashNode(v,k);
        this.elements++
        break;
      }
      alive = alive.next;
    }
    console.log(index);

    var loadFactor = this.elements/this.capacity
    if(loadFactor >  0.9){
      this.refresh()
    }
  }

  hashInt(k){
    return ((this.a*k + this.b)%this.p)%this.capacity;
  }

  polyhash(k){
    var codeA = 'a'.charCodeAt(0);
    var polyValue = 0
    for(let i = k.length -1 ; i>=0 ; i--){
      polyValue = (polyValue*this.x + (k.charCodeAt(i))) % this.p
    }
    
    return polyValue;
  }

  refresh(){
    var auxTable = new HashTable(this.capacity*2, this.p)

    for(let i = 0; i<this.capacity; i++){
   
        var auxNode = this.table[i]
        while(auxNode != undefined){
          auxTable.insert(auxNode.key,auxNode.value)
          auxNode = auxNode.next
        }
    }
    //REFFFFFFFFFRESH
    this.a = auxTable.a
    this.b = auxTable.b
    this.x = auxTable.x
    this.capacity *=2
    this.table = auxTable.table
  }


  toString(){
    for(let i = 0; i<this.capacity; i++){
   
      var auxNode = this.table[i]
      var cadena= " |"+i+"| ";
      while(auxNode != undefined){
        cadena+= auxNode.key+" "+ auxNode.value +" "
        auxNode = auxNode.next
      }
      console.log(cadena)
  }
  }

  preComputeHashes(T, cP){ //Cardinalidad de P = cP
    
    var polyTable = new Array(T.length - cP + 1)
    var subString = T.substring(T.length - cP, T.length);
    polyTable[T.length-cP] = this.polyhash(subString)

    var y = 1
    for(let i = 1; i<=cP; i++){
      y = (this.x * y) % this.p
    }
    //console.log("y: "+y);
    for(let i= T.length - cP -1; i>=0; i--){
      polyTable[i] = (this.x*polyTable[i+1] + (T.charCodeAt(i)) - y*(T.charCodeAt(i + cP))) % this.p
    }
    return polyTable 
  }

  haveMessage(T, P){ //Text== Mensaje
    var colector = undefined
    var pHash = this.polyhash(P)
    var polyTable = this.preComputeHashes(T, P.length)
    //console.log(polyTable)
    //console.log(pHash)
    
    for(let i=0; i<= T.length-P.length ; i++){
      //let tHash = this.polyhash(T.substring(i, i+P.length))
      //console.log(tHash)
      if(pHash != polyTable[i]){
        continue
      }
      
      if(T.substring(i, i + P.length) === P){
        colector = T
        break;
      }
    }
    return colector;
  }
  
}

let hash = new HashTable(4, 41269) //BIg cousin
console.log(hash.haveMessage("¿Cómo estás Carla?009", "Carla"))



module.exports = HashTable;

