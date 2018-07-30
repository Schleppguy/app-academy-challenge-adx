import { connect } from 'react-redux';
import { getDocs, setCurrentDoc, updateDoc } from '../actions';
import DocListView from '../components/DocListView';

const mapStateToProps = state => {
  const { docs, getDocsLoading } = state.docs;
  return {
    docs,
    getDocsLoading,
    username: state.user.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDocs: () => dispatch(getDocs()),
    setCurrentDoc: docName => dispatch(setCurrentDoc(docName)),
    updateDoc: doc => dispatch(updateDoc(doc))
  };
};

const DocList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocListView);

export default DocList;
