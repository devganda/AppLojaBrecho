import { combineReducers } from "redux";
import  userRedurcer from "./reducers/userRedurcer";

export default combineReducers({
    user:userRedurcer
});