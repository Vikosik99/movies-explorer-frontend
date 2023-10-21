import "./SavedMovies.css"
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";

export function SavedMovies() {
  return (
    <div className="savedMovies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </div>
  )
}