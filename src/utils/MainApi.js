import { MAIN_API_URL } from "./constants";

class MainApi {
  constructor() {
    this._url = MAIN_API_URL;
    this._headers = {'Content-Type': 'application/json'};
  }

  _checkRes(res) {
    return res.ok ? res.json() : Promise.reject({status: res.status, res: res});
  }

  getCards() {
    this._headers["Authorization"] = `Bearer ${localStorage.getItem("jwt")}`
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
    }).then((res) => this._checkRes(res));
  }

  getUserInfo() {
    this._headers["Authorization"] = `Bearer ${localStorage.getItem("jwt")}`
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers
    }).then((res) => this._checkRes(res));
  }

  setUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({name, email}),
    }).then((res) => this._checkRes(res));
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({name, email, password})
    }).then((res) => this._checkRes(res));
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({email, password})
    }).then((res) => this._checkRes(res));
  }

  createNewCard(card) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(card),
    }).then((res) => this._checkRes(res));
  }

  deleteCard(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkRes(res));
  }
}

const mainApi = new MainApi();
export default mainApi;
