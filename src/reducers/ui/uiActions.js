// 引入 actionTypes 常數
import ActionTypes from '../../lib/constants' ;

// 同步 actions 處理，回傳 action 物件
export const showSpinner = () => ({ 
  type: ActionTypes.SHOW_SPINNER,
});

export const hideSpinner = () => ({ 
  type: ActionTypes.HIDE_SPINNER,
});
