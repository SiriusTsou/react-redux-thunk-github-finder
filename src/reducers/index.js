import data from './data/dataReducer';
import ui from './ui/uiReducer';
import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
  data, 
  ui,
});

export default rootReducer;
