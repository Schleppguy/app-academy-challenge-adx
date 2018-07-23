import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import UserForm from '../components/UserForm';

const AppView = props => {
  let content;
  if (props.username) {
    content = <div>Has username</div>;
  } else {
    content = <UserForm addUser={props.addUser} />;
  }
  return (
    <React.Fragment>
      <CssBaseline />
      {content}
    </React.Fragment>
  );
};

export default AppView;
