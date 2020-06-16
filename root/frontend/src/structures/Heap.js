class Heap{
  constructor(size){
      this.size = size;
      this.heap = new Array(size);
      this.elements = 0;
  }
  
  parent(i){
      return Math.trunc((i-1)/2);
  }
  
  leftChild(i){
      return Math.trunc(2*i+1);
  }
  
  rightChild(i){
      return Math.trunc(2*i+2);
  }
  
  siftUp(i){
      while(i >= 0 && this.heap[i].compareTo(this.heap[this.parent(i)]) == 1 ){
          
          let aux = this.heap[this.parent(i)];
          this.heap[this.parent(i)] = this.heap[i];
          this.heap[i] = aux;
          i = this.parent(i);
      }
      
  }
  
  siftDown(i){
      var maxIndex = i;
      var l = this.leftChild(i);
      
      var r = this.rightChild(i);
      
      if(l < this.elements && this.heap[l].compareTo(this.heap[maxIndex]) == 1)
          maxIndex = l;
      
      if(r < this.elements && this.heap[r].compareTo(this.heap[maxIndex]) == 1)
          maxIndex = r;
      
      if(i != maxIndex){
          var aux = this.heap[i];
          this.heap[i] = this.heap[maxIndex];
          this.heap[maxIndex] = aux;
          
          this.siftDown(maxIndex);
      }
  }
  
  
  insert(element){
      if(this.elements<this.size){
         this.elements+=1;
         this.heap[this.elements - 1] = element;
         

           this.siftUp(this.elements-1);
         
      }
  }
  
  poll(){
      let result = this.heap[0];
      this.heap[0] = this.heap[this.elements -1];
      this.elements -= 1; 
      this.siftDown(0);
      return result;
  }
  
  peek(){
      
      return this.heap[0];
  }
  

  
  toString() {
      let result = "";
     for(let i = 0; i<this.elements; i++){
        result += "|"+i+"|"+this.heap[i].toString() + " ";
     }
     return result;
  }
}

module.exports = Heap;