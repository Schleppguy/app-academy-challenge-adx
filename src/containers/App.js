import { connect } from 'react-redux';
import { addUser } from '../actions';
import AppView from '../components/AppView';



const mapStateToProps = state => {
  return { username: state.user.username };
};

const mapDispatchToProps = dispatch => {
  return { addUser: (username) => dispatch(addUser(username)) };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView);

export default App;
