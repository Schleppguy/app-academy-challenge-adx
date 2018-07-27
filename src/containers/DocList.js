import { connect } from 'react-redux';
import { getDocs, setCurrentDoc } from '../actions';
import DocListView from '../components/DocListView';

const mapStateToProps = state => {
  const { docs, getDocsLoading } = state.docs;
  return {
    docs,
    getDocsLoading
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
