import { combineReducers } from "redux";
import { charactersReducer } from "./characters";

// Combine Reducers
export default combineReducers({
  characters: charactersReducer
});
