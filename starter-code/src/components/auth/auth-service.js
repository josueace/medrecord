// auth/auth-service.js

import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
    //  baseURL: 'http://localhost:3001',
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

  listDoctors= (user) => {
    return this.service.get('/doctor/'+user)
    .then(response => response.data)
  }

  listHospitals= (user) => {
    return this.service.get('/hospital/'+user)
    .then(response => response.data)
  }
  listVisits= (user) => {
    return this.service.get('/visit/'+user)
    .then(response => response.data)
  }
  listLabs= (user) => {
    return this.service.get('/lab/'+user)
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

  postHospital = (name,phone, city,state,user) => {
      
    return this.service.post('/hospital', {name,phone, city,state,user})
    .then(response =>
        response.data
        )
  }

  delHospital = (name,user) => {
     
    return this.service.post('/delhospital', {name,user})
    .then(response =>
        response.data
        )
  }


  postLab = (labdate,name, results,user) => {
    return this.service.post('/lab', {labdate,name, results,user})
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

  
  postVisit = (visitdate,hospital, doctor, reason,diagnosis,user) => {
    return this.service.post('/visit', {visitdate, hospital, doctor,reason,diagnosis,user})
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