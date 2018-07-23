import { createAction } from 'redux-actions';
import axios from 'axios';

const BASE_URL = 'https://aachallengeone.now.sh';

export const addUser = createAction('ADD_USER');
export const clearCurrentDoc = createAction('CLEAR_CURRENT_DOC');
export const setCurrentDoc = createAction('SET_CURRENT_DOC');
export const getDocsStart = createAction('GET_DOCS_START');
export const getDocsSuccess = createAction('GET_DOCS_SUCCESS');
export const getDocsError = createAction('GET_DOCS_ERROR');

export const getDocs = () => {
  return dispatch => {
    dispatch(getDocsStart());
    axios
      .get(`${BASE_URL}/read`)
      .then(docs => {
        dispatch(getDocsSuccess(docs));
      })
      .catch(error => {
        dispatch(getDocsError(error));
      });
  };
};
