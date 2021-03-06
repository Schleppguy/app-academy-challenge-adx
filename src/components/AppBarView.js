import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
};

const AppBarView = props => {
  const { classes, clearCurrentDoc } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Button color="inherit" onClick={() => clearCurrentDoc()}>
            Doc List
          </Button>
          <Typography variant="title" color="inherit" className={classes.title}>
            App Academy Docs
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(AppBarView);
