import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commonReducer from './commonReducer';
import initialState from '../initialState';

const appReducer = combineReducers({
  auth: authReducer(initialState.auth),
  common: commonReducer(initialState.common),
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
