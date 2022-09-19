import {
  IS_LOGIN_REQUEST,
  IS_LOGIN_SUCCESS,
  IS_LOGIN_FAILED,
} from "../../actions/actionTypes";
//=================================================

const initionalState = {
  sending: false,
  userInfo: {},
  message: "",
  err: "",
};

//--------------
function isLogin(state = initionalState, action) {
  switch (action.type) {
    case IS_LOGIN_REQUEST:
      return {
        sending: true,
        userInfo: {},
        message: "",
        err: "",
      };
    case IS_LOGIN_SUCCESS:
      return {
        sending: false,
        userInfo: action.userInfo,
        message: action.message,
        err: "",
      };
    case IS_LOGIN_FAILED:
      return {
        sending: false,
        userInfo: "",
        message: "",
        err: action.err,
      };
    default:
      return state;
  }
}

export default isLogin;
