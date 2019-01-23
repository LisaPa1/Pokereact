import { combineReducers } from "redux";
import LastSeenReducer from "./LastSeenReducer";

const allReducers = combineReducers({
  name: LastSeenReducer
});

export default allReducers;
