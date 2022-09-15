import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import redusers from "./reducers";
const store = legacy_createStore(redusers, applyMiddleware(thunk));
export default store;
