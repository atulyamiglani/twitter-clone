import { combineReducers } from "redux";
import currentUser from "./currentUser";
import error from "./error";

const rootReducer = combineReducers(error, currentUser);

export default rootReducer;
