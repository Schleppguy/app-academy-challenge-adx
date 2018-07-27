import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  main: {
    marginLeft: '3em',
    maxWidth: 750,
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 4,
    minHeight: '40em'
  },
  button: {
    margin: `${theme.spacing.unit * 4}px 1em ${theme.spacing.unit * 2}px`,
    width: '15em'
  }
});

class DocView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleContentSave = this.handleContentSave.bind(this);
  }

  componentDidMount() {
    this.setState({ content: this.props.docs[this.props.currentDoc].content });
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
    this.props.updateSaveButtonStatus(false);
  }

  handleContentSave() {
    this.props.updateDoc({
      name: this.props.currentDoc,
      content: this.state.content,
      issuer: this.props.username
    });
  }

  render() {
    const { classes, saveButtonDisabled } = this.props;
    const { content } = this.state;
    return (
      <div className={classes.main}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          disabled={saveButtonDisabled}
          onClick={this.handleContentSave}
        >
          Save Changes
        </Button>
        <Paper className={classes.content}>
          <Typography variant="display2" gutterBottom>
            {this.props.currentDoc}
          </Typography>
          <Input
            autoFocus
            disableUnderline
            fullWidth
            multiline
            value={content}
            onChange={this.handleContentChange}
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(DocView);
