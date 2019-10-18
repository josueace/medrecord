import React from "react";
import MaterialTable from 'material-table';

import AuthService from '../auth/auth-service.js';// import source file



class Hospital2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
       { title: 'City',  field: 'city' },
       { title: 'state', field: 'state' },
       { title: 'Name', field: 'name' },
       { title: 'Phone', field: 'phone' }
          ],
        };
        this.service = new AuthService();


    }

    componentDidMount() {
        
      this.service.listHospitals(this.props.loggedInUser)
      .then( data => {
        this.setState({data});
          })
      .catch( error =>{alert(error); console.log(error)} )
  }


  render() {

  
 return (
    <MaterialTable
      title="Hospitals"
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
              this.service.postHospital(newData.name, newData.phone,newData.city,newData.state,this.props.loggedInUser)///make sure case match with field in html
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
              this.service.delHospital(oldData.name,this.props.loggedInUser)///make sure case match with field in html
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
export default Hospital2;
