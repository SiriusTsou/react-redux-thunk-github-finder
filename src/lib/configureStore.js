import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Immutable from 'immutable';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(reduxThunk, createLogger({ stateTransformer: state => state.toJS() })),
);
