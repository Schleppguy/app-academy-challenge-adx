import { handleActions } from 'redux-actions';
import { clearCurrentDoc, setCurrentDoc } from '../actions';

const defaultState = {
  currentDoc: null
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
    })
  },
  defaultState
);

export default docs;
