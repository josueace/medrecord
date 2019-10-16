import React from "react";

import axios from 'axios';

import MaterialTable from 'material-table';

import AuthService from '../auth/auth-service.js';


class Lab extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            columns: [
       { title: 'Lab Date',  field: 'labdate' },
       { title: 'name', field: 'name' },
       { title: 'results', field: 'results' }
          ],
        };
        this.service = new AuthService();

    }

    componentDidMount() {
       
        
     axios
      .get(
        "http://localhost:3001/lab/pedro"
      )
      .then(({ data }) => {
        
        this.setState({data});
      });
        
      }

  render() {

  
 return (
    <MaterialTable
      title="Labs"
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

              this.service.postLab(newData.labdate, newData.name,newData.results,"pedro")///make sure case match with field in html
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

              this.service.delLab(oldData.labdate,"pedro")///make sure case match with field in html
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
export default Lab;
