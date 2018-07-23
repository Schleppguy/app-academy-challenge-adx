import { handleActions } from 'redux-actions';
import { addUser } from '../actions';

const defaultState = {
  username: null
};

const user = handleActions(
  {
    [addUser]: (state, { payload }) => ({
      ...state,
      username: payload
    })
  },
  defaultState
);

export default user;
