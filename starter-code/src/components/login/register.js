import React, { Component } from "react";
import PropTypes from 'prop-types';
import Edit from '../myedit.js'

import AuthService from '../auth/auth-service.js';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userName: '', 
          email:'',
          password: ''
          };
          this.service = new AuthService();

      }


       handleChange = (value,field) => {
           this.setState(
            {[field]:value}
           // ,()=> alert(JSON.stringify(this.state))
            );
      }


handleFormSubmit = (event) => {
     
    
    event.preventDefault();
  const username = this.state.username;
  const email = this.state.email;
    const password = this.state.password;

  this.service.signup(username, email,password)///make sure case match with field in html
  .then( response => {
      this.setState({
          username: response.username, 
          password: "",
      });
      this.props.getUser(response.username);
      this.props.history.push("/dashboard");
  })
  .catch( error =>{alert(error); console.log(error)} )
      
    
  }


  render() {
    

    return (
     
         
<div className="flex-container">
  <div style={{flexGrow: 4}} className='leftcontext'>
   
  <br></br>
  <img src="fav.ico" alt="logo" height="200" width="200"></img>
  <h1>Welcome to medrecord</h1>
  <h3>Keep track of your health</h3>

  </div>
  
  <div style={{flexGrow: 1}} className='rightcontext'>

  <form onSubmit = {this.handleFormSubmit}>

      <div className="flex-container2">
     <div>
     
     <h4 className="black" >CREATE ACCOUNT</h4>
     </div>
     <div>
     <Edit field="username" handleChange={this.handleChange}/>         
     </div>
     <div>
     <Edit field="email"  handleChange={this.handleChange}/>
     </div>  

     <div>
     <Edit field="password"  handleChange={this.handleChange}/>
     </div>  

     <div>
     <Edit field="confirmpassword"  handleChange={this.handleChange}/>
     </div>  

     <div>
     <button width="100%" type="button" onClick={this.handleFormSubmit} className="btn btn-primary btn-lg">Register</button>
     </div>  

     <div>
     <h5 className="black">Already have an account?</h5>
     </div>  
     
      <div>
     <a  href="/login">Login</a>
     </div>  

    </div>
  </form>
        

  </div>
</div>


        
      
    );
  }
}

RegisterForm.propTypes = {
  show: PropTypes.bool,
};

export default RegisterForm;
