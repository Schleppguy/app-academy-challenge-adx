import { combineReducers } from 'redux';
import funcounter from './funcounter';
import user from './user';

const reducers = combineReducers({
  funcounter,
  user
});

export default reducers;
