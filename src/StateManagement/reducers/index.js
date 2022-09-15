import { combineReducers } from "redux";
import isLogin from "./userRedusers/isLogin";
//=======================================
export default combineReducers({
  isloginState: isLogin,
});
