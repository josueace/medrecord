import React from "react";
import MaterialTable from 'material-table';
import AuthService from '../auth/auth-service.js';

class Doctor extends React.Component {

    constructor(props) {
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
    
      this.service.listDoctors(this.props.loggedInUser)
              .then( data => {
                this.setState({data});
                  })
              .catch( error =>{alert(error); console.log(error)} )
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
              this.service.postDoctor(newData.name, newData.speciality,newData.city,newData.state,this.props.loggedInUser)///make sure case match with field in html
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

              this.service.delDoctor(oldData.name,this.props.loggedInUser)///make sure case match with field in html
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
