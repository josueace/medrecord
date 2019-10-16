import React, { useState, useEffect } from "react";
import axios from 'axios';

import MaterialTable from 'material-table';

export default function MaterialTableDemo() {


 


  const [state, setState] = React.useState({



    
    columns: [

   //   { title: 'City', field: 'city' },
     // { title: 'state', field: 'state' },
      { title: 'Name', field: 'name' },
      //{ title: 'Phone', field: 'phone' }
    ],
    data2: [
      
      {
        name: 'Zerya Betül',
      },
      {
        name: 'Zerya 33Betül',
      }
      
    ],


  });

  useEffect(() => {
    alert('primero usefect');
    axios
      .get(
        "http://localhost:3001/hospital/pedro"
      )
      .then(({ data }) => {
        alert('to change state '+JSON.stringify(data));
        setState({data:data},(data)=>{});
      });

    }, []);

  alert('que1 '+JSON.stringify(state.data));
  return state.data? (

    

    <MaterialTable
      title="Hospitals"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  ): (
    <div>Loading...</div>
  );

 

  

  
}
