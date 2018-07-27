import { connect } from 'react-redux';
import { updateDoc, updateSaveButtonStatus } from '../actions';
import DocView from '../components/DocView';

const mapStateToProps = state => {
  const { docs, currentDoc, saveButtonDisabled } = state.docs;
  return {
    docs,
    currentDoc,
    username: state.user.username,
    saveButtonDisabled
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDoc: doc => dispatch(updateDoc(doc)),
    updateSaveButtonStatus: bool => dispatch(updateSaveButtonStatus(bool))
  };
};

const Doc = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocView);

export default Doc;
