import React from "react";



import MaterialTable from 'material-table';

import AuthService from '../auth/auth-service.js';


class Visit extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            columns: [
       { title: 'Visit Date',  field: 'visitdate' },
       { title: 'Hospital', field: 'hospital' },
       { title: 'Doctor', field: 'doctor' },
       { title: 'reason', field: 'reazon' },
       { title: 'Diagnosis', field: 'diagnosis' }
          ],
        };
        this.service = new AuthService();

    }

    componentDidMount() {
       
      this.service.listVisits(this.props.loggedInUser)
              .then( data => {
                this.setState({data});
                  })
              .catch( error =>{alert(error); console.log(error)} )
          }

  render() {

  
 return (
    <MaterialTable
      title="Visits"
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

              this.service.postVisit(newData.visitdate, newData.hospital,newData.doctor,newData.reason,newData.diagnosis,this.props.loggedInUser)///make sure case match with field in html
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

              this.service.delVisit(oldData.visitdate,this.props.loggedInUser)///make sure case match with field in html
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
export default Visit;
