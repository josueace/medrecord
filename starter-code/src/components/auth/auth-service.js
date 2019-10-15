// auth/auth-service.js

import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3001',
      withCredentials: true
    });
    this.service = service;
  }


  signup = (username,email, password) => {
      alert(username+ 'em: '+email+'  pass '+password);
    return this.service.post('/signup', {username,email, password})
    .then(response => response.data)
  }

  login = (username, password) => {
     
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }
  
  logout = () => {
      
    return this.service.post('/logout', {})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

}

export default AuthService;