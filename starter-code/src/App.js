import React, { Component } from "react";
import "./App.css";
import LoginForm from './components/login/loginform.js'

import Register from './components/login/register.js'
import Dashboard from './components/login/dashboard.js'

import axios from 'axios';


import { Switch, Route } from 'react-router-dom';
import {  Redirect } from 'react-router'


class App extends Component {
  
  constructor(){
    super()
    this.state = {
        countries: []
    }
}



  render() {
   
    return (
      <div className="App">
      

      <Switch>
          <Route exact path='/' component={LoginForm}/>          
          <Route path='/register' component={Register}/>
          <Route path='/dashboard' component={Dashboard}/>

        </Switch>

       
      </div>
    );
  }
}

export default App;
