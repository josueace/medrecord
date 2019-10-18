import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const options=['/dashboard/visit','/dashboard/lab','/dashboard/hospital','/dashboard/doctor'];

export default function SelectedListItem(props) {
  
 
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    props.history.push(options[index]);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <List >
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Visits" />
        </ListItem>


        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Labs" />
        </ListItem>

      

      </List>
      <Divider />
      <List >
    
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={handleClick}
        >
         

        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Reference" />
        {open ? <ExpandLess /> : <ExpandMore />}
         </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem button className={classes.nested}
           selected={selectedIndex === 2}
           onClick={event => handleListItemClick(event, 2)}
           >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Hospitals" />
          </ListItem>

          <ListItem button className={classes.nested}
           selected={selectedIndex === 3}
           onClick={event => handleListItemClick(event, 3)}
         >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Doctors" />
          </ListItem>

        </List>
      </Collapse>
        
      </List>

      

      
      
    </div>
  );
}
