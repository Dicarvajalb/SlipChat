
import React, { Component } from 'react'
const stack = require('../structures/stack.js')
const MessageModel = require('../data/chatModel.js')
const Thash = require("../structures/HashTableS.js")
let a = new MessageModel("Sam", "¿Cómo estás, Carla?")
let b = new MessageModel("Carla", "¿Cómo estás, Sam?")
var s = new stack(2); 
s.push(a)
s.push(b)

// Se cargan los datos 
for(let i = 0; i<1000; i++){
  var a1 = undefined
  if(i%2 === 0){
     a1 = new MessageModel("Sam", "¿Cómo estás, Carla?" + i)
  }
  else{
     a1 = new MessageModel("Carla", "¿Cómo estás, Sam?" + i)
  }
  s.push(a1)
}
//console.log(s)
var chataux = new stack (s.position); //Stack auxiliar
for(let i=0; i<s.position; i++){
  chataux.push(s.array[i]);
}

export default class Chat extends Component {
  
  state = {
    message: '',
    person: 'Sam',
    word: ""
  }
  word = e =>{
    this.state.word = e.target.value;
  }
  searchMessages=e =>{
    console.time()
    e.preventDefault(); 
    let hash = new Thash(4, 41269) //Big cousin
    var list = document.getElementById("PEncontradas")
    list.innerHTML = ""
    
    if(e.target.value !== ""){
      for(let i=0;i<s.position; i++){
        let msg = s.array[i]
        //console.log(msg +" "+e.target.value)
        let colector = hash.haveMessage(msg.text, e.target.value)
        

        if(colector !== undefined){
          var li = document.createElement("li")
          if(msg.autor === 'Sam'){
            li.classList.add("Sam")
          }
          else{
            li.classList.add("Carla")
          }
          li.appendChild(document.createTextNode(colector))
          list.insertBefore(li, list.childNodes[0])
        }
        
        colector = undefined
      }
      
    }
    console.timeEnd()
  }

  showMessages = e =>{
    e.preventDefault(); 
    if(chataux.position >=2){ //Si el tamaño es mayor a 2 

      for(let i=0; i<10; i++){
        var message = chataux.keyPop();
        var chat = document.getElementById("chat") 
        var li = document.createElement("li")
        var textnode = document.createTextNode(message.text)
        if(message.autor === "Sam"){
          li.classList.add('Sam')
          li.classList.add('rounded-lg')
        }
        
        else{  
          li.classList.add('Carla')
        }

        li.appendChild(textnode)
        chat.insertBefore(li, chat.childNodes[0])
      }
      //console.log(s)
    }else{
      alert("¡No hay más mensajes por cargar!")
    }
  }
  
  onSubmit = e =>{
    e.preventDefault()

    
    if(this.state.message !== ""){ 
      //Se pasa al 
      //s.push(new MessageModel(this.state.person, this.state.message))
    var chat = document.getElementById("chat") 
    var li = document.createElement("li")
    var textnode = document.createTextNode(this.state.message)
    
    if(this.state.person === "Sam"){
      li.classList.add('Sam')
    }
    
    else{  
      li.classList.add('Carla')
    }
    li.appendChild(textnode)
    chat.insertBefore(li, chat.childNodes[chat.childNodes.length])
    s.push(new MessageModel(this.state.person, this.state.message))
  }
  else{
    alert("Writes some!")
  }
  console.log(s);
    
    }
  

  Onchange = e =>{
    this.setState({
      [e.target.name]: e.target.value 
    })
    
    console.log(this.state)
  }
  render() {
    return (
      <div className = "pages">
        <h1>Chat Sam y Carla</h1>
        <div className="Chat">
          <a href="" onClick= {this.showMessages}>Cargar más mensajes...</a>
          <ul id= "chat" className= "msg">
           
            
          </ul>
    
        </div>
        <div>
        <textarea type="text" placeholder= "searching.." onChange={this.searchMessages}/>

       </div>
       <div className="Chat">
         <h1>Listado</h1>
        <ul id="PEncontradas" className="msg">
          
        </ul>
       </div>
       <form onSubmit = {this.onSubmit}>
         <label style= {{color: "Peru"}}>Choose a guy</label>
         <select name = "person" onChange={this.Onchange}>
           <option value="Sam">Sam</option>
           <option value="Carla">Carla</option>
         </select>
         <textarea type="text" name= "message" placeholder="Write a message" onChange={this.Onchange}/>
         <button type="submit" onChange={this.Onchange}>Send</button>
       </form>
      </div>
    )
  }
}
