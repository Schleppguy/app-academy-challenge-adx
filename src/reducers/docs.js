import { handleActions } from 'redux-actions';
import {
  clearCurrentDoc,
  setCurrentDoc,
  getDocsStart,
  getDocsSuccess,
  getDocsError,
  updateDocStart,
  updateDocSuccess,
  updateDocError,
  updateSaveButtonStatus,
  setDocSaveMessage,
  toggleDocSaveSnackbar,
  addNewDoc
} from '../actions';

const defaultState = {
  currentDoc: null,
  docs: null,
  getDocsLoading: false,
  getDocsLastError: null,
  updateDocLoading: false,
  updateDocLastError: null,
  saveButtonDisabled: true,
  docSaveMessage: null,
  docSaveSnackbarOpen: false
};

const docs = handleActions(
  {
    [clearCurrentDoc]: state => ({
      ...state,
      currentDoc: null
    }),
    [setCurrentDoc]: (state, { payload }) => ({
      ...state,
      currentDoc: payload
    }),
    [getDocsStart]: state => ({
      ...state,
      getDocsLoading: true
    }),
    [getDocsSuccess]: (state, { payload }) => ({
      ...state,
      getDocsLoading: false,
      docs: payload
    }),
    [getDocsError]: (state, { payload }) => ({
      ...state,
      getDocsLoading: false,
      getDocsLastError: payload
    }),
    [updateDocStart]: state => ({
      ...state,
      updateDocLoading: true
    }),
    [updateDocSuccess]: state => ({
      ...state,
      updateDocLoading: false
    }),
    [updateDocError]: (state, { payload }) => ({
      ...state,
      updateDocLoading: false,
      updateDocLastError: payload
    }),
    [updateSaveButtonStatus]: (state, { payload }) => ({
      ...state,
      saveButtonDisabled: payload
    }),
    [setDocSaveMessage]: (state, { payload }) => ({
      ...state,
      docSaveMessage: payload
    }),
    [toggleDocSaveSnackbar]: (state, { payload }) => ({
      ...state,
      docSaveSnackbarOpen: payload
    }),
    [addNewDoc]: (state, { payload }) => ({
      ...state,
      docs: { ...state.docs, [payload.name]: payload }
    })
  },
  defaultState
);

export default docs;
