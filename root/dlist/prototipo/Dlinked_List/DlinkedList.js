const nodo = require('./nodo');

class DlinkedList{  
  constructor(){
    this.head = null;
    this.tail = null;
  }

  pushFront(key){
    const newNodo = new nodo(key);
    
    if(this.head == null){
      this.head = newNodo;
      this.tail = newNodo;
    }
    else{
      this.head.prev = newNodo;
      newNodo.next = this.head;
      this.head = newNodo;
    }
  }
  
  pushBack(key){
    const newNodo = new nodo(key);
    
    if(this.head == null){
    	this.head = newNodo;
    	this.tail = newNodo;
    }
    else{
      this.tail.next = newNodo;
      newNodo.prev = this.tail;
      this.tail = newNodo;
    }
  }
  
  topFront(){
    return this.head;
  }
  
  popFront(){ 
    if(this.head == null)
      return false;
    else if(this.head == this.tail){
      this.head = null;
      this.tail = null;
      return true;
    }
    else{
    	this.head = this.head.next
    	this.head.prev = null;
      return true;
    }  
  }
  
  topBack(){
    return this.tail;
  }
  
  popBack(){   
    if(this.head == null)
     return false;
    else if(this.head == this.tail){
      this.head = null;
      this.tail = null;
      return true;
    }
    else{
    	this.tail = this.tail.prev
    	this.tail.next = null;
      return true;
    }  
  }

//Find by username
	find(key){
    let nodeAux = this.head;
    
    while(nodeAux != null){
      if(nodeAux.key.user == key)
        return nodeAux;
      nodeAux = nodeAux.next;
    }
    return null;
  }

  get(i){
    let nodeAux = this.head;
    let index = 0;
    while(nodeAux != null && index <= i){
      if(index == i){
        return nodeAux;
      }
      index++;
      nodeAux = nodeAux.next;
    }
    return null;
  }

  set(user,cuenta){
    let finded = this.find(user);
    if(finded == null)
      return false;
    else{
      finded.key = cuenta;
      return true;
    }
  }
  
  erase(key){
    //Vacio
    let nodo = this.find(key)
    
    if(nodo.next == null){ 
      nodo.prev.next = null
      this.tail = nodo.prev
    }
    else if(nodo.prev == null){
      nodo.next.prev = null;
      this.head = nodo.next;
    }
    else{
      nodo.next.prev = nodo.prev;
      nodo.prev.next = nodo.next;
    }   
  }

	addBefore(node, key){
    let newNodo = new nodo(key);
    let nodoAux = this.find(node.key.user);
    	if(nodoAux == null)
       return false;
    	else if(nodoAux.prev == null){
        this.head.prev = newNodo;
        newNodo.next = this.head;
        this.head = newNodo;
        return true;
      }
      else{        
        newNodo.next = nodoAux;
        newNodo.prev = nodoAux.prev;
        newNodo.prev.next = newNodo;
        nodoAux.prev = newNodo;
        return true;
      }
  }
  
  addAfter(node, key){
    let newNodo = new nodo(key);
    let nodoAux = this.find(node.key.user);
    	if(nodoAux == null)
       return false;
    	else if(nodoAux.next == null){
        this.tail.next = newNodo;
        newNodo.prev = this.tail;
        this.tail = newNodo;
        return true;
      }
      else{        
    		newNodo.prev = nodoAux;
        newNodo.next = nodoAux.next;
        newNodo.prev.next = newNodo;
        nodoAux.next = newNodo;
        return true;
      } 
  }
  
	isEmpty(){
  	if(this.head == null){
      return true;
    }
    return false;
  }
}
module.exports = DlinkedList;