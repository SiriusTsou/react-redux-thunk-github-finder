import { handleActions } from 'redux-actions';
import InitialState from './dataInitialState';
import ActionTypes from '../../lib/constants' ;

const initialState = new InitialState();

const dataReducer = handleActions({ 
  // 當使用者按送出按鈕，發出 GET_GITHUB_SUCCESS action 時將接收到的資料 merge 
  [ActionTypes.GET_GITHUB_SUCCESS]: (state, { payload }) => (
    state.merge({
      data: payload.data,
    })
  ),  
  // 當使用者輸入使用者 ID 會發出 CHAGE_USER_ID action 時將接收到的資料 merge 
  [ActionTypes.CHAGE_USER_ID]: (state, { payload }) => (
    state.merge({
      'userId': payload.userId,
    })
  ),
}, initialState);

export default dataReducer;
