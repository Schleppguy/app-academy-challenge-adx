import React from 'react';
import PropTypes from 'prop-types';
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
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Button color="inherit">My Docs</Button>
          <Typography variant="title" color="inherit" className={classes.title}>
            App Academy Docs
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

AppBarView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBarView);
