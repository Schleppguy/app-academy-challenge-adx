import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DocumentIcon from '@material-ui/icons/Description';

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
  }
});

class DocListView extends Component {
  constructor(props) {
    super(props);
    this.props.getDocs();
    this.state = {
      docNames: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.docs !== prevProps.docs) {
      this.setState({ docNames: Object.keys(this.props.docs) });
    }
  }

  render() {
    const { classes } = this.props;
    return this.props.loading ? (
      <div>Loading docs..</div>
    ) : (
      <div className={classes.main}>
        <Typography variant="title" className={classes.title}>
          All Docs
        </Typography>
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
                    primary={docName}
                    secondary={`Owners: ${this.props.docs[docName].owners.join(
                      ', '
                    )}`}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DocListView);
