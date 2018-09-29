import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
export { fetchCharacters } from "./actions";
import * as api from "../api";

/* eslint-enable */
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api))
);
