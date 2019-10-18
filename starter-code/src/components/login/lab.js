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
      this.service.listLabs(this.props.loggedInUser)
              .then( data => {
                this.setState({data});
                  })
              .catch( error =>{alert(error); console.log(error)} )
  }

  render() {

  
 return (

<div>

{ this.state.errorMessage?
         <div className="alert alert-danger">
             <p>{this.state.errorMessage}</p>
          </div>
        :null
     }

   <MaterialTable
      title="Labs"
      columns={this.state.columns}
      data={this.state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
               
              if (newData.name==null || newData.name.length<=0)
              {  
                this.setState({errorMessage:"Name is required"});
              } 
              else
              this.service.postLab(newData.labdate, newData.name,newData.results,this.props.loggedInUser)///make sure case match with field in html
              .then( response => {
                     const data = [...this.state.data];
                     this.setState({ ...this.state, data });
                     data.push(newData);
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

              this.service.delLab(oldData.labdate,this.props.loggedInUser)///make sure case match with field in html
              .then( response => {
                  })
              .catch( error =>{alert(error); console.log(error)} )

            }, 600);
          }),
      }}
    /> 

    </div>

    );
  }
}
export default Lab;
