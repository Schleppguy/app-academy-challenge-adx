import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FunButton from '../containers/FunButton';
import UserForm from '../components/UserForm';

const AppView = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <FunButton />
      <UserForm addUser={props.addUser} />
    </React.Fragment>
  );
};

export default AppView;
