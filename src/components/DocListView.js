import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DocumentIcon from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  main: {
    marginLeft: '3em',
    maxWidth: 750
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    width: '90%'
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 1em ${theme.spacing.unit * 2}px`
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 20
  }
});

class DocListView extends Component {
  constructor(props) {
    super(props);
    this.props.getDocs();
    this.state = {
      docNames: [],
      createInput: '',
      inputError: false,
      inputErrorMessage: null,
      showCreateForm: false
    };
    this.toggleShowCreateForm = this.toggleShowCreateForm.bind(this);
    this.handleCreateDoc = this.handleCreateDoc.bind(this);
    this.handleCreateInputChange = this.handleCreateInputChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.docs !== prevProps.docs) {
      this.setState({ docNames: Object.keys(this.props.docs) });
    }
  }

  toggleShowCreateForm() {
    this.setState({ showCreateForm: !this.state.showCreateForm });
  }

  handleCreateInputChange(e) {
    this.setState({ createInput: e.target.value });
  }

  handleCreateDoc() {
    if (this.state.createInput === '') {
      this.setState({
        inputError: true,
        inputErrorMessage: 'Please enter a name for your document'
      });
    } else if (this.state.docNames.lastIndexOf(this.state.createInput) >= 0) {
      this.setState({
        inputError: true,
        inputErrorMessage:
          'A document with this name already exists. Please enter a new name.'
      });
    } else {
      this.props.updateDoc({
        name: this.state.createInput.split(' ').join('_'),
        issuer: this.props.username,
        content: ' ',
        actionType: 'create'
      });
    }
  }

  render() {
    const { classes } = this.props;
    return this.props.loading ? (
      <div>Loading docs..</div>
    ) : (
      <div className={classes.main}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="title" className={classes.title}>
            All Docs
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.toggleShowCreateForm}
          >
            <AddIcon className={classes.leftIcon} />
            Create new doc
          </Button>
        </div>
        <div className={classes.list}>
          <List>
            {this.state.docNames.map(docName => {
              return (
                <ListItem
                  button
                  onClick={() => this.props.setCurrentDoc(docName)}
                  key={docName}
                >
                  <ListItemIcon>
                    <DocumentIcon style={{ fontSize: 40 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={docName.split('_').join(' ')}
                    secondary={`Owners: ${this.props.docs[docName].owners.join(
                      ', '
                    )}`}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
        <Dialog
          open={this.state.showCreateForm}
          onClose={this.toggleShowCreateForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a new document
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the name of your new document.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name of document"
              fullWidth
              onChange={this.handleCreateInputChange}
            >
              {this.state.createInput}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleShowCreateForm} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCreateDoc} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(DocListView);
