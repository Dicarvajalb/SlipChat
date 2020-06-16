
class stack{

  constructor(size){
    this.array = new Array(size);
    this.position = 0;
  }

  push(k){

    if(this.position == this.array.length){
      let aux = new Array(this.array.length*2);

      for(let i=0; i<this.position; i++){
          aux[i] = this.array[i]
      }

      this.array = aux;
    }
      
      this.array[this.position] = k;
      this.position ++;    
      

    
  }

  keyTop(){
    return this.array[this.position-1];
  }

  keyPop(){
    if(this.position>0){
    let aux = this.keyTop();
    this.array[--this.position] = undefined
    return aux
    }
    return undefined;
  }

  isEmpty(){
    if(this.position == 0){
      return true
    }
    else{
     return false;
    }
  }

  
}

module.exports = stack;

