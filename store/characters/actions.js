import * as types from "./types";

// Set Fetching
function setFetching(value) {
  return {
    type: types.CHARACTERS_SET_FETCHING,
    value: value
  };
}

// Set List
function setList(value) {
  return {
    type: types.CHARACTERS_UPDATE_LIST,
    value
  };
}

// Set Item
function setItem(value) {
  return {
    type: types.CHARACTERS_SET_ITEM,
    value
  };
}

// Fetch Characters
export function fetchCharacters() {
  return (dispatch, getState, api) => {
    dispatch(setList([]));
    dispatch(setFetching(true));
    api
      .fetchCharacters()
      .then(res => {
        dispatch(setFetching(false));
        console.log("<CharactersActions> fetchCharacters: res=%o", res);
        dispatch(setList(res.data.records));
      })
      .catch(err => {
        dispatch(setFetching(false));
        console.log("<CharactersActions> fetchCharacters: err=%o", err);
      });
  };
}
