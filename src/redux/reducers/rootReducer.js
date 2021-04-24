import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commonReducer from './commonReducer';
import initialState from '../initialState';

const appReducer = combineReducers({
  auth: authReducer(initialState.auth),
  common: commonReducer(initialState.common),
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
