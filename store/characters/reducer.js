import * as types from "./types";
import initialState from "./initialState";

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.CHARACTERS_SET_FETCHING:
      return {
        ...state,
        isFetching: action.value
      };

    case types.CHARACTERS_UPDATE_LIST:
      return {
        ...state,
        list: action.value,
        data: typeof action.data !== "undefined" ? action.data : state.data
      };

    case types.CHARACTERS_SET_ITEM:
      return {
        ...state,
        item: action.value
      };

    default:
      return state;
  }
}
