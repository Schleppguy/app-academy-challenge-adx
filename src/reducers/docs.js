import { handleActions } from 'redux-actions';
import {
  clearCurrentDoc,
  setCurrentDoc,
  getDocsStart,
  getDocsSuccess,
  getDocsError
} from '../actions';

const defaultState = {
  currentDoc: null,
  docs: null,
  loading: false,
  lastError: null
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
      loading: true
    }),
    [getDocsSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      docs: payload
    }),
    [getDocsError]: (state, { payload }) => ({
      ...state,
      loading: false,
      lastError: payload
    })
  },
  defaultState
);

export default docs;
