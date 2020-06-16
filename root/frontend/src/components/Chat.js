
import React, { Component } from 'react'
const stack = require('../structures/stack.js')
const MessageModel = require('../data/chatModel.js')

let a = new MessageModel("Sam", "¿Cómo estás, Carla?")
let b = new MessageModel("Carla", "¿Cómo estás, Sam?")
var s = new stack(2);
s.push(a)
s.push(b)

// Se cargan los datos 
for(let i = 0; i<100000; i++){
  if(i%2==0){
    var a1 = new MessageModel("Sam", "¿Cómo estás, Carla?" + i)
  }
  else{
    var a1 = new MessageModel("Carla", "¿Cómo estás, Sam?" + i)
  }
  s.push(a1)
}

var chataux = s;

export default class Chat extends Component {
  
  state = {
    message: '',
    person: 'Sam'
  }
  

  showMessages =e=>{
    e.preventDefault();
    if(chataux.position >=2){
      for(let i=0; i<2; i++){
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
      <div>
        <h1>Chat Sam y Carla</h1>
        <div className="Chat border border-primary mt-4 ml-4">
          <a href="" onClick= {this.showMessages}>Cargar más mensajes...</a>
          <ul id= "chat" className= "msg">
           
            
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
