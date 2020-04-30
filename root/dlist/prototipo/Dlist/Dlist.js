"use strict";

class DList{
   
  //contructor
 

  constructor(defaultSize){
    this.array = new Array(defaultSize);
    this.quantity = 0;
  }
  
  set(i, k){
    if(this.quantity > i &&   i>=0){
      this.array[i] = k;
      return true;
    }
    
    else return false;
  }
 
	pushBack(element){
    
    if(this.quantity == this.array.length){
  	let k = new Array(this.array.length*2);
        
        for(let i = 0; i < this.quantity ; i++){
          k[i] = this.array[i];
        }
        this.array = k;
      }
    
      this.array[this.quantity++] = element; 
    
  }
  
  
  get(i){
    if(this.quantity > i && i >= 0){
       return this.array[i];
    }
    
    else return undefined;
  }
  
  remove(i){
    
      if(i> this.size()-1)
        return false;
      else if(i>this.quantity-1){
        return true;
      }
      else{   
        this.array[i] = null;
        this.array[i] = this.array[this.quantity-1];
        this.array[this.quantity-1] = null;
        this.quantity--;
        return true;
      }  
  }
  
	size(){
    	return this.array.length;
  }

        
  find(k){ 
    for (var i = 0; i < this.quantity; i++) {
      if (this.array[i].user == k) {
          return i;
    }
  }
  return -1;
  }
  
  
  getquantity(){
      return this.quantity;
  }
   
}
module.exports = DList;