import "./Movies.css"

import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";


export function Movies() {
  return (
    <div className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </div>
  )
}