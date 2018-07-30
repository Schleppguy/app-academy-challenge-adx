import { createAction } from 'redux-actions';
import axios from 'axios';

const BASE_URL = 'https://aachallengeone.now.sh';

export const addUser = createAction('ADD_USER');
export const clearCurrentDoc = createAction('CLEAR_CURRENT_DOC');
export const setCurrentDoc = createAction('SET_CURRENT_DOC');
export const getDocsStart = createAction('GET_DOCS_START');
export const getDocsSuccess = createAction('GET_DOCS_SUCCESS');
export const getDocsError = createAction('GET_DOCS_ERROR');
export const updateDocStart = createAction('UPDATE_DOC_START');
export const updateDocSuccess = createAction('UPDATE_DOC_SUCCESS');
export const updateDocError = createAction('UPDATE_DOC_ERROR');
export const updateSaveButtonStatus = createAction('UPDATE_SAVE_BUTTON_STATUS');
export const setDocSaveMessage = createAction('SET_DOC_SAVE_MESSAGE');
export const toggleDocSaveSnackbar = createAction('TOGGLE_DOC_SAVE_SNACKBAR');
export const addNewDoc = createAction('ADD_NEW_DOC');

//async
export const getDocs = () => {
  return dispatch => {
    dispatch(getDocsStart());
    axios
      .get(`${BASE_URL}/read`)
      .then(docs => {
        dispatch(getDocsSuccess(docs.data));
      })
      .catch(error => {
        dispatch(getDocsError(error));
      });
  };
};

export const updateDoc = doc => {
  return dispatch => {
    dispatch(updateDocStart());
    axios
      .post(`${BASE_URL}/update/${doc.name}`, {
        issuer: doc.issuer,
        content: doc.content
      })
      .then(() => {
        dispatch(updateDocSuccess());
        dispatch(addNewDoc({ ...doc, owners: [doc.issuer] }));
        dispatch(getDocs());
        if (doc.actionType === 'update') {
          dispatch(updateSaveButtonStatus(true));
          dispatch(setDocSaveMessage('Saved!'));
          dispatch(toggleDocSaveSnackbar(true));
        } else {
          dispatch(setCurrentDoc(doc.name));
        }
      })
      .catch(error => {
        dispatch(updateDocError(error));
        if (doc.actionType === 'update') {
          dispatch(
            setDocSaveMessage(
              'An error occured while saving. Please try again.'
            )
          );
          dispatch(toggleDocSaveSnackbar(true));
        }
      });
  };
};
