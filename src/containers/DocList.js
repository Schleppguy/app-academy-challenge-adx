import { connect } from 'react-redux';
import { getDocs } from '../actions';
import DocListView from '../components/DocListView';

const mapStateToProps = state => {
  return {
    docs: state.docs.docs
  };
};

const mapDispatchToProps = dispatch => {
  return { getDocs: () => dispatch(getDocs()) };
};

const DocList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocListView);

export default DocList;
