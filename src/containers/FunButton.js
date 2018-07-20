import { connect } from 'react-redux';
import { addFun } from '../actions';
import FunButtonView from '../components/FunButtonView';

const FUN_AMOUNT = 1;

const mapStateToProps = state => {
  return { funcount: state.funcounter.funcount };
};

const mapDispatchToProps = dispatch => {
  return { addFun: () => dispatch(addFun(FUN_AMOUNT)) };
};

const FunButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(FunButtonView);

export default FunButton;
