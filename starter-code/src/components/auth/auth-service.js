// auth/auth-service.js

import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'https://mymedrecord.herokuapp.com',
      withCredentials: true
    });
    this.service = service;
  }


  signup = (username,email, password) => {
      
    return this.service.post('/signup', {username,email, password})
    .then(response =>
        
        response.data
        
        )
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

  postDoctor = (name,speciality, city,state,user) => {
      
    return this.service.post('/doctor', {name,speciality, city,state,user})
    .then(response =>
        
        response.data
        
        )
  }

  delDoctor = (name,user) => {
      
    return this.service.post('/deldoctor', {name,user})
    .then(response =>
        
        response.data
        
        )
  }

  postLab = (labdate,name, results) => {
    return this.service.post('/lab', {labdate,name, results})
    .then(response =>
        response.data
        )
  }

  delLab = (labdate,user) => {
    return this.service.post('/dellab', {labdate,user})
    .then(response =>
        response.data
        )
  }

  
  postVisit = (visitdate,hospital, doctor,reason,diagnosis) => {
    return this.service.post('/visit', {visitdate,hospital, doctor,reason,diagnosis})
    .then(response =>
        response.data
        )
  }

  delVisit = (visitdate,user) => {
    return this.service.post('/delvisit', {visitdate,user})
    .then(response =>
        response.data
        )
  }

}

export default AuthService;