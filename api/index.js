import axios from "axios";
import * as Config from "../App/config";

// TMBD Base URL
const BASE_URL = "http://gateway.marvel.com";

// Setup
export function setup() {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.post["Referer"] = Config.TMDB_API_REFERER_VALUE;
  console.log("<API> AXIOS Default Settings Ready!");
}

// Fetch Characters
export function fetchCharacters() {
  const url =
    "/v1/public/characters?ts=" +
    Config.TMDB_API_TS_VALUE +
    "&apikey=" +
    Config.TMDB_API_PUBLIC_KEY +
    "&hash=" +
    Config.TMDB_API_HASH_VALUE;
  return axios.get(url);
}
