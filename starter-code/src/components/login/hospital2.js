import React from "react";

import axios from 'axios';

import MaterialTable from 'material-table';



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

    }

    componentDidMount() {
        
     axios
      .get(
        "https://mymedrecord.herokuapp.com/hospital/pedro"
      )
      .then(({ data }) => {
       
        this.setState({data});
      });
        
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
            }, 600);
          }),
      }}
    /> 

    );
  }
}
export default Hospital2;
