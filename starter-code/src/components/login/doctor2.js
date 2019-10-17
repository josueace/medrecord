import React from "react";

import axios from 'axios';

import MaterialTable from 'material-table';

import AuthService from '../auth/auth-service.js';


class Doctor extends React.Component {

    constructor(props) {
        alert('doct2 '+JSON.stringify(props));
        
        super(props);
       
        this.state = {
            columns: [
       { title: 'City',  field: 'city' },
       { title: 'state', field: 'state' },
       { title: 'Name', field: 'name' },
       { title: 'speciality', field: 'speciality' }
          ],
        };
        this.service = new AuthService();

    }

    componentDidMount() {
      
        
     axios
      .get(
        "https://mymedrecord.herokuapp.com/doctor/pedro"
      )
      .then(({ data }) => {
        
        this.setState({data});
      });
        
      }

  render() {

  
 return (
    <MaterialTable
      title="Doctors"
      columns={this.state.columns}
      data={this.state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data.push(newData);
              this.setState({ ...this.state, data });

             

              this.service.postDoctor(newData.name, newData.speciality,newData.city,newData.state,"pedro")///make sure case match with field in html
              .then( response => {
                  })
              .catch( error =>{alert(error); console.log(error)} )

            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data[data.indexOf(oldData)] = newData;
              this.setState({ ...this.state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data.splice(data.indexOf(oldData), 1);
              this.setState({ ...this.state, data });

              this.service.delDoctor(oldData.name,"pedro")///make sure case match with field in html
              .then( response => {
                  })
              .catch( error =>{alert(error); console.log(error)} )

            }, 600);
          }),
      }}
    /> 

    );
  }
}
export default Doctor;
