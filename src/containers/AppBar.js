import { connect } from 'react-redux';
import { clearCurrentDoc } from '../actions';
import AppBarView from '../components/AppBarView';

const mapDispatchToProps = dispatch => {
  return { clearCurrentDoc: () => dispatch(clearCurrentDoc()) };
};

const AppBar = connect(
  null,
  mapDispatchToProps
)(AppBarView);

export default AppBar;
