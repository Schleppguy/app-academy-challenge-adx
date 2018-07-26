import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../containers/AppBar';
import UserForm from '../components/UserForm';
import DocList from '../containers/DocList';

const AppView = props => {
  let content;
  if (props.username) {
    if (props.currentDoc) {
      content = <div>currentDoc</div>;
    } else {
      content = <DocList />;
    }
  } else {
    content = <UserForm addUser={props.addUser} />;
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      {content}
    </React.Fragment>
  );
};

export default AppView;
