import { connect } from 'react-redux';
import {
  updateDoc,
  updateSaveButtonStatus,
  toggleDocSaveSnackbar
} from '../actions';
import DocView from '../components/DocView';

const mapStateToProps = state => {
  const {
    docs,
    currentDoc,
    saveButtonDisabled,
    docSaveMessage,
    docSaveSnackbarOpen
  } = state.docs;
  return {
    docs,
    currentDoc,
    username: state.user.username,
    saveButtonDisabled,
    docSaveMessage,
    docSaveSnackbarOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDoc: doc => dispatch(updateDoc(doc)),
    updateSaveButtonStatus: bool => dispatch(updateSaveButtonStatus(bool)),
    toggleDocSaveSnackbar: bool => dispatch(toggleDocSaveSnackbar(bool))
  };
};

const Doc = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocView);

export default Doc;
