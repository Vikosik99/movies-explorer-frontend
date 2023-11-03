import { MOVIES_API_URL } from "./constants";

class MoviesApi {
  constructor() {
    this._url = MOVIES_API_URL + "/beatfilm-movies";
  }

  _checkRes(res) {
    return res.ok ? res.json() : Promise.reject({status: res.status, res: res});
  }

  getCards() {
    return fetch(`${this._url}`, {
      headers: {'Content-Type': 'application/json'}
    }).then((res) => this._checkRes(res));
  }
}

const moviesApi = new MoviesApi();
export default moviesApi;
