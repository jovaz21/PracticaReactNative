import axios from "axios";
import * as Config from "../App/config";
import { md5 } from "../utils";

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
  const now = Date.now();
  const hashValue = md5.calculate(
    now + Config.TMDB_API_PRIVATE_KEY + Config.TMDB_API_PUBLIC_KEY
  );
  const url =
    "/v1/public/characters?ts=" +
    now +
    "&apikey=" +
    Config.TMDB_API_PUBLIC_KEY +
    "&hash=" +
    hashValue;
  return axios.get(url);
}
