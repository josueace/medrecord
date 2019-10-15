import React, { Component } from "react";
import "./App.css";
import LoginForm from './components/login/loginform.js'

import Register from './components/login/register.js'
import Dashboard from './components/login/dashboard.js'

import AuthService from './components/auth/auth-service';

import axios from 'axios';


import { Switch, Route } from 'react-router-dom';
import {  Redirect } from 'react-router'


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser(){// will call backend
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser= (userObj) => {
    console.log('user '+userObj);

    this.setState({
      loggedInUser: userObj
    })
  }


  render() {
    this.fetchUser();
    
    if(this.state.loggedInUser){
      return (
        <div className="App">
        <Switch>
            <Route exact path='/' component={Dashboard}/>          
            <Route path='/register' component={Register}/>
           
            <Route exact path="/logout" render={() => (
              <Redirect  to="/" />// push??
              )}/>

            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/dashboard/case' component={Dashboard}/>
            <Route path='/visit' component={Dashboard}/>
          </Switch>
  
         
        </div>
      );
        
    }
    else
    return (
      <div className="App">
      <Switch>
          <Route exact path='/' component={LoginForm}/>          
          <Route path='/register' component={Register}/>
          <Route path='/logout' component={LoginForm}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/dashboard/case' component={Dashboard}/>
          <Route path='/visit' component={Dashboard}/>
        </Switch>

       
      </div>
    );
  }
}

export default App;
