import React, { Component } from "react";
import PropTypes from 'prop-types';
import Edit from '../myedit.js'

import AuthService from '../auth/auth-service.js';
import {  Redirect } from 'react-router'

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userName: '', 
          password: ''
          };
          this.service = new AuthService();
      }

      /* better way
      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }
      */

       handleChange = (value,field) => {
           this.setState(
            {[field]:value}
           //,()=> alert(JSON.stringify(this.state))
            );
      }

      handleFormSubmit = (event) => {
       
        event.preventDefault();
        const username = this.state.username;// make sure the case matches the field
        const password = this.state.password;
        
        this.service.login(username, password)
        .then( response => {
        
           this.setState({ username: "", password: "" });
           this.props.history.push("/dashboard");
          //this.props.getUser(response)
        })
        .catch( error => {alert(error);console.log(error) })
      }


  render() {
    

    return (
     
         
<div className="flex-container">
  <div style={{flexGrow: 4}} className='leftcontext'>
   
  <br></br>
  <img src="fav.ico"  height="200" width="200"></img>
  <h1>Welcome to medrecord</h1>
  <h3>Keep track of your health</h3>

  </div>
  
  <div style={{flexGrow: 1}} className='rightcontext'>

  <form onSubmit = {this.handleFormSubmit}>

  <div className="flex-container2">
      <div></div>
     <div>
     <br></br>
     
     <h4>LOGIN TO YOUR ACCOUNT</h4>
     </div>
     <div>
     <Edit field="username" handleChange={this.handleChange}/>         
     </div>
     <div>
     <Edit field="password"  handleChange={this.handleChange}/>
     </div>  

     <div>
     
     <button width="100%" type="submit"  className="btn btn-primary btn-lg">LOGIN</button>
     </div>  

     <div>
     <h5>Don't have an account?</h5>
     </div>  
     
      <div>
      <a href="/register" className="btn btn-primary ancho240" role="button">CREATE ACCOUNT</a>
     </div>  

    </div>
  </form>
        

  </div>
</div>


        
      
    );
  }
}

LoginForm.propTypes = {
  show: PropTypes.bool,
};

export default LoginForm;
