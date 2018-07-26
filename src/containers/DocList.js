import { connect } from 'react-redux';
import { getDocs, setCurrentDoc } from '../actions';
import DocListView from '../components/DocListView';

const mapStateToProps = state => {
  const { docs, loading } = state.docs;
  return {
    docs,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDocs: () => dispatch(getDocs()),
    setCurrentDoc: docName => dispatch(setCurrentDoc(docName))
  };
};

const DocList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocListView);

export default DocList;
