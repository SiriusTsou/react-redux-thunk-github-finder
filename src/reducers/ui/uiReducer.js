import { handleActions } from 'redux-actions';
import InitialState from './uiInitialState';
import ActionTypes from '../../lib/constants' ;

const initialState = new InitialState();

// 隨著 fetch 結果顯示 spinner
const uiReducer = handleActions({
  [ActionTypes.SHOW_SPINNER]: (state) => (
    state.set('spinnerVisible', true)
  ),
  [ActionTypes.HIDE_SPINNER]: (state) => (
    state.set('spinnerVisible', false)
  ),
}, initialState);

export default uiReducer;
