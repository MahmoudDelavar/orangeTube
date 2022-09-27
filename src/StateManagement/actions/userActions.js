import axios from "axios";
import {
  IS_LOGIN_REQUEST,
  IS_LOGIN_SUCCESS,
  IS_LOGIN_FAILED,
} from "./actionTypes";

//===================== Is Login Actions =====================
export const isLoginRequest = ({ token }) => ({
  type: IS_LOGIN_REQUEST,
  token,
});

export const isLoginSuccess = (userInfo, message) => ({
  type: IS_LOGIN_SUCCESS,
  userInfo,
  message,
});

export const isLoginFailed = (err) => ({
  type: IS_LOGIN_FAILED,
  err,
});

export const isLogin = ({ token }) => {
  return (dispatch) => {
    dispatch(isLoginRequest({ token }));
    axios
      .post("http://localhost:4000/api/auth/userbytoken", { token })
      .then((res) => {
        const userInfo = res.data.data;
        const message = res.data.message;
        dispatch(isLoginSuccess(userInfo, message));
      })
      .catch((err) => {
        dispatch(err);
      });
  };
};
