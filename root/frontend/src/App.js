import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Navigation from './components/Navigation'
import ChatList from './components/ChatList'
import UserProfile from './components/UserProfile'
import CreateUser from './components/CreateUser'
import EditProfile from './components/EditProfile'
import Home from './components/Home'
import Chat from './components/Chat'
import Score from './components/Score'


function App() {
  return (
    <Router className="App">
      <Navigation/>

      <Route path ="/chats" component ={ChatList} />
      <Route path ="/create" component ={CreateUser} />
      <Route path ="/user/:id" component ={UserProfile} />
      <Route path ="/edit/:id" component ={EditProfile} />
      <Route path ="/" exact component ={Home} />
      <Route path ="/chat" exact component ={Chat} />
      <Route path ="/Score" exact component ={Score} />

    </Router>
  );
}

export default App;
