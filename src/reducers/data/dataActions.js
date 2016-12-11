// 這邊引入了 fetch 的 polyfill，考以讓舊的瀏覽器也可以使用 fetch
import 'whatwg-fetch';
// 引入 actionTypes 常數
import ActionTypes from '../../lib/constants' ;

// 引入 uiActions 的 action
import { showSpinner, hideSpinner } from '../ui/uiActions';

// 這邊是這個範例的重點，要學習我們之前尚未講解的非同步 action 處理方式：不同於一般同步 action 直接發送 action，
// 非同步 action 會回傳一個帶有 dispatch 參數的 function，裡面使用了 Ajax（這裡使用 fetch()）進行處理
// 一般和 API 互動的流程：INIT（開始請求/秀出 spinner）-> COMPLETE（完成請求/隱藏 spinner）-> ERROR（請求失敗）
// 這次我們雖然沒有使用 redux-actions 但我們還是維持標準 Flux Standard Action 格式：{ type: '', payload: {} }

export const getGithubInitiate = () => ({
  type: ActionTypes.GET_GITHUB_INITIATE,
});

export const getGithubSuccess = (json) => ({
  type: ActionTypes.GET_GITHUB_SUCCESS,
  payload: {
    data: json,
  },
});

export const getGithubFail = () => ({
  type: ActionTypes.GET_GITHUB_FAIL,
});

export const getGithub = (userId) => {
  return (dispatch) => {
    dispatch(getGithubInitiate());
    dispatch(showSpinner());
    fetch('https://api.github.com/users/' + userId)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) { 
        dispatch(getGithubSuccess(json));
        dispatch(hideSpinner());
      })
      .catch(function(response) { 
        dispatch(getGithubFail());
      });
  };
};

// 同步 actions 處理，回傳 action 物件
export const changeUserId = (text) => ({
  type: ActionTypes.CHAGE_USER_ID,
  payload: {
    userId: text,
  }, 
});


export const onChangeUserId = (event) => (
  changeUserId(event.target.value)
);

export const onSubmitUserId = (userId) => (
  getGithub(userId)
);
