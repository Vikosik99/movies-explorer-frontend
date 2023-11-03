import { MOVIES_API_URL, SHORT_DURATION } from "./constants";

export function filterSearch(text, isShort, movies) {
  return movies.filter((movie) => {
    const result = movie.nameRU.toLowerCase().includes(text.toLowerCase())
    return isShort ? (movie.duration <= SHORT_DURATION && result) : result
  })
}

export function updateLocalStorage(movie) {
  const localMovies = localStorage.getItem("movies");
  if (localMovies) {
    const resultList = JSON.parse(localMovies).map((item) => (item.id === movie.id || item.id === movie.movieId) ? movie : item);
    localStorage.setItem("movies", JSON.stringify(resultList));
  }
}

export class Movie {
  constructor(data) {
    this.nameRU = data.nameRU;
    this.nameEN = data.nameEN;
    this.country = data.country;
    this.director = data.director;
    this.duration = data.duration;
    this.year = data.year;
    this.description = data.description;
    this.image = MOVIES_API_URL + data.image.url;
    this.trailerLink = data.trailerLink;
    this.thumbnail = MOVIES_API_URL + data.image.formats.thumbnail.url;
    this.movieId = data.id;
  }
}
