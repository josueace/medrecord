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
        alert('fetch '+response.username);
        this.setState({
          loggedInUser:  response.username
        }) 
      })
      .catch( err =>{
        alert('fetchuser error ' +err);//callback hell here whenever you setstate it will call render
      //  this.setState({
        //  loggedInUser:  null
      //  }) 
      })
    }
  }
  
  
  getTheUser= (userObj) => {
    alert('who call tshi? '+userObj )
    this.setState({
      loggedInUser: userObj
    })
  }
  

//https://tylermcginnis.com/react-router-pass-props-to-components/
 // <Route exact path='/dashboard' component={Dashboard}/>    // no good to pass props

 //  render={(props) => <Dashboard {...props}  coco="pera" getUser={this.getTheUser} />}

  render() {
    alert('render app render app rener app');
    this.fetchUser();
 
    if(this.state.loggedInUser!=null){
       alert('userin');
      return (
        <div className="App">
        <Switch>
          
           
        <Route path='/login' component={LoginForm}/>

            <Route
              path='/dashboard'
              render={(props) => <Dashboard {...props} coco="pera2" loggedInUser={this.state.loggedInUser} />}
             />

             <Route
              path='/register'
              render={(props) => <Register {...props}  getUser={this.getTheUser} />}
             />
         
            <Route path='/dashboard/case' component={Dashboard}/>
            <Route path='/visit' component={Dashboard}/>
          </Switch>
  
         
        </div>
      );
        
    }
    else{
      alert('user out ');
    return (
      <div className="App">
      <Switch>
          
          <Route
            path='/login'
              render={(props) => <LoginForm {...props}  coco="pera" getUser={this.getTheUser} />}
           />

          <Route
              path='/register'
              render={(props) => <Register {...props}  getUser={this.getTheUser} />}
             />
          
          <Route
              path='/dashboard'
              render={(props) => <Dashboard {...props} coco="pera2" loggedInUser={this.state.loggedInUser} />}
             />

          
        </Switch>

       
      </div>
     );
    }
  }
}

export default App;
