import { combineReducers } from 'redux';

import { sazonalidadeReducer } from './sazonalidade/sazonalidade-reducer';

export const rootReducer = combineReducers({
  sazonalidade: sazonalidadeReducer,
});
