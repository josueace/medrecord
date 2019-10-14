import React, { Component } from "react";
import PropTypes from 'prop-types';
import Edit from '../myedit.js'

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userName: '', 
          password: ''
          };
      }


       handleChange = (value,field) => {
           alert(field);
           alert(value+ ' pare');
           this.setState(
            {[field]:value},
            ()=> alert(JSON.stringify(this.state))
            );
      }


handleFormSubmit = (event) => {
    event.preventDefault();   
    console.log(this.state)

    this.props.addAFoodItem(this.state)
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

  <div class="flex-container2">
      <div>
      </div>
     <div>
    
     
     <h4>CREATE ACCOUNT</h4>
     </div>
     <div>
     <Edit field="userName" handleChange={this.handleChange}/>         
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
     <button width="100%" type="button" class="btn btn-primary btn-lg">Register</button>
     </div>  

     <div>
     <h5>Already have an account?</h5>
     </div>  
     
      <div>
     <a  href="/">Login</a>
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
