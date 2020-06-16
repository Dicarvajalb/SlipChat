import React, { Component } from 'react'

const heap = require('../structures/Heap.js')

const S = require('../data/userPoints.js')

var scores = new heap(100);

for(let i = 0; i<50; i++){

    var a1 = new S("Diego" + i, i)
    scores.insert(a1);
}

export default class Score extends Component {
  state= {
    name: "",
    score: 0
  }
  
  showScores =() =>{
    var auxscores = scores;
    for(let i=0; i < auxscores.elements && auxscores.peek() != undefined;){

        var score = auxscores.poll();
        var table = document.getElementById("table") 
        var li = document.createElement("li")
        var textnode = document.createTextNode(score.user + " " + score.score)
        li.appendChild(textnode)
        table.insertBefore(li, table.childNodes[table.childNodes.length])
    }
  
   console.log(scores)
  }
  onSubmit = e =>{
    e.preventDefault();
    if(this.state.name != "" && this.state.score != 0){
      scores.insert(new S(this.state.name, parseInt(this.state.score)))
    }
    console.log(scores)
    //this.showScores();
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
        SCORE
        <ol id= "table">
        </ol>

        <form onSubmit = {this.onSubmit}>
         <label style= {{color: "Peru"}}>Name </label>
         <textarea type="text" name= "name" placeholder="Name" onChange={this.Onchange}/>
         <label style= {{color: "Salmon"}}>Score</label>
         <textarea type="text" name= "score" placeholder="Score" onChange={this.Onchange}/>
         <button type="submit" onChange={this.Onchange}>Send</button>
       </form>

       <button type="" onClick={this.showScores}>Refresh</button>
      </div>
    )
  }
}
