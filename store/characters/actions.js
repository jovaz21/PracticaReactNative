import * as types from "./types";

// Set Fetching
function setFetching(value) {
  return {
    type: types.CHARACTERS_SET_FETCHING,
    value: value
  };
}

// Set List
function setList(value, data) {
  return {
    type: types.CHARACTERS_UPDATE_LIST,
    value,
    data
  };
}

// Set Item
export function setItem(value) {
  return {
    type: types.CHARACTERS_SET_ITEM,
    value
  };
}

// Fetch Characters
export function fetchCharacters() {
  // Async Thunk Action
  return (dispatch, getState, api) => {
    dispatch(setList([]));
    dispatch(setFetching(true));
    api
      .fetchCharacters()
      .then(res => {
        dispatch(setFetching(false));
        var data = {
          count: res.data.data.count,
          limit: res.data.data.limit,
          offset: res.data.data.offset,
          total: res.data.data.total
        };
        var list = res.data.data.results.map(item => {
          var image =
            item.thumbnail.path +
            "/portrait_uncanny." +
            item.thumbnail.extension;
          if (image.indexOf("image_not_available") >= 0) image = null;
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            image: image
          };
        });
        dispatch(setList(list, data));
      })
      .catch(err => {
        dispatch(setFetching(false));
        console.log("<CharactersActions> fetchCharacters: err=%o", err);
      });
  };
}
