import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 300,
    maxWidth: '50%',
    margin: 'auto',
    marginTop: '5em'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  input: {
    marginTop: '2em'
  }
};

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleSubmit() {
    this.props.addUser(this.state.inputValue);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
              Welcome to App Academy Docs!
            </Typography>
            <Typography component="p">
              Please create a username to access and edit the team's docs.
            </Typography>
            <TextField
              className={classes.input}
              autoFocus
              required
              label="Enter A Username"
              fullWidth
              value={this.state.inputValue}
              onChange={this.handleInputChange.bind(this)}
            />
          </CardContent>
          <CardActions>
            <Button onClick={this.handleSubmit.bind(this)} color="primary">
              Submit
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserForm);
