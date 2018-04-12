import { combineReducers } from 'redux';

import sessionReducer from './session';

const mainReducer = combineReducers({
  session: sessionReducer,
});

export default mainReducer;
