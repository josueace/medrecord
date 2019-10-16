import React, { useState, useEffect } from "react";

import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({


    columns: [

      { title: 'Name', field: 'name' },
      { title: 'Phone', field: 'phone' },
      { title: 'City', field: 'city' },
      { title: 'Speciality', field: 'speciality' },
  
      {
        title: 'State',
        field: 'state'
        
      },
    ],


    data: [
     
      {
        name: 'Miami Hospital',
        phone: '1-222-333-4444',
        speciality: 'Orthopedic',
        city: 'Miami',
        state: 'FL',
      },
      {
        name: 'Boston Hospital',
        phone: '1-622-333-4444',
        city: 'Boston',
        speciality: 'Heart Surgeon',
        state: 'MS',
      },
    ],
  });

  return (
    <MaterialTable
      title="Doctors"
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
  );
}
