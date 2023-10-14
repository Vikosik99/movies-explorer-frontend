import "./SearchForm.css"
import search from "../../../images/film-icon-lupa.svg"

export function SearchForm() {
  return (
    <div className="SearchForm">
      <div className="SearchForm__block">
        <img
          className="SearchForm__search"
          src={search}
          alt="лупа"
        />
        <p className="SearchForm__film">Фильм</p>
        <button className="SearchForm__searchButton">Найти</button>
        <div className="SearchForm__contfilm SearchForm__contfilm_1">
          <div className="SearchForm__switch-off SearchForm__switch-on"></div>
          <p className="SearchForm__flashFilm">Короткометражки</p>
        </div>
      </div>
      <div className="SearchForm__contfilm SearchForm__contfilm_2">
        <div className="SearchForm__switch-off SearchForm__switch-on"></div>
        <p className="SearchForm__flashFilm">Короткометражки</p>
      </div>
      <div className="SearchForm__line"></div>
    </div>
  )
}