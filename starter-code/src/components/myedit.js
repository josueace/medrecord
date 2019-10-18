import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';


import AccountCircle from "@material-ui/icons/AccountCircle";

//no need to add clicktodelete lifter

const myedit = (props) => {

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
        },
       
        margin: {
          margin: theme.spacing(1),
        },
        textField: {
          flexBasis: 100,
        },
      }));

    const classes = useStyles();
  
  /*
   need to digest this way

   const [values, setValues] = React.useState({//useState hook.. returns values and setvalues to update it
      field1: '',
      field2: ''
    });

  const handleChange = prop => event => {
        alert(JSON.stringify(values));
      setValues({ ...values, [prop]: event.target.value });
    };
   */


   /* 
   const  handleChange2 = (e) => {
        props.onChange(e.target.value,e.target.id);//good lifting up
      }
*/

// parent form of this edit should have handleChange  <Edit  handleChange=
const handleChange2 =  e => {//way to send paremeter and also target// but notice i dont set props
    props.handleChange(e.target.value,e.target.id);//good lifting up
};

    return (
        
        <TextField
        id={props.field}
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label={props.field}
        onChange={handleChange2}
        
        InputProps={{
          endAdornment: <InputAdornment position="end">
            <AccountCircle />
          </InputAdornment>,
        }}
      />
      )
    };


  export default myedit;



