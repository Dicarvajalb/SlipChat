class DList{
   
  //contructor
 

  constructor(defaultSize){
    this.array = new Array(defaultSize);
    this.quantity = 0;
    //console.log("Lista Creada");
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
  	let aux = new Array(this.array.length*2);
        
        for(let i = 0; i < this.quantity ; i++){
          aux[i] = this.array[i];
        }
        this.array = aux;
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
    
      this.array[i]= undefined;
      
      while(i < this.quantity-1);{// No se ejecuta cuando i == quantity-1
        this.array[i]= this.array[i+1];
    		i++;
      }
      this.array[this.quantity--] = undefined;
  }
 
  
	size(){
    	return this.array.length;
  }

        
  find(k){ 
      for(let i= 0; i<this.quantity; i++){
          if(this.array[i] === k){
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