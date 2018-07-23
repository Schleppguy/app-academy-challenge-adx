import { combineReducers } from 'redux';
import user from './user';
import docs from './docs';

const reducers = combineReducers({
  user,
  docs
});

export default reducers;
