import { handleActions } from 'redux-actions';
import {
  clearCurrentDoc,
  setCurrentDoc,
  getDocsStart,
  getDocsSuccess,
  getDocsError,
  updateDocStart,
  updateDocSuccess,
  updateDocError
} from '../actions';

const defaultState = {
  currentDoc: null,
  docs: null,
  getDocsLoading: false,
  getDocsLastError: null,
  updateDocLoading: false,
  updateDocLastError: null
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
      loading: false
    }),
    [updateDocError]: (state, { payload }) => ({
      ...state,
      loading: false,
      updateDocLastError: payload
    })
  },
  defaultState
);

export default docs;
