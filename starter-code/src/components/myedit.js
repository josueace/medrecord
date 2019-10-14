import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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

    const [values, setValues] = React.useState({//useState hook.. returns values and setvalues to update it
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = prop => event => {
        alert(JSON.stringify(values));
      setValues({ ...values, [prop]: event.target.value });
    };

   /* 
   const  handleChange2 = (e) => {
        props.onChange(e.target.value,e.target.id);//good lifting up
      }
*/

const handleChange2 =  e => {//way to send paremeter and also target
    props.handleChange(e.target.value,e.target.id);//good lifting up
};

    return (
        
        <TextField
        id={props.field}
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label={props.field}
        value={values.username}
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



