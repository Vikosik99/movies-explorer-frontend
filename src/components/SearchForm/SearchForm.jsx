import "./SearchForm.css"
import search from "../../images/film-icon-lupa.svg"
import { useState } from "react";

export function SearchForm({inputValue, isShort, onSearch, onShort, onChange}) {
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [isKeyWordPresent, setIsKeyWordPresent] = useState(false);

  function handleCheckbox(e) {
    setIsFormDisabled(() => true);
    onShort(e);
    setIsFormDisabled(() => false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsFormDisabled(() => true);
    onSearch();
    setIsFormDisabled(() => false);
  }

  return (
    <div className="SearchForm">
      <form className="SearchForm__container" noValidate onSubmit={handleSubmit} name="searchForm">
        <div className="SearchForm__block">
          <div className="SearchForm__label">
            <img
              className="SearchForm__search"
              src={search}
              alt="лупа"
            />
            <input
              name="input"
              className="SearchForm__film"
              placeholder="Фильм"
              type="text"
              required
              value={inputValue || ""}
              onChange={onChange}
              disabled={isFormDisabled}
            />
            <button className="SearchForm__searchButton" type="submit" disabled={isFormDisabled}>Найти</button>
          </div>
          <label className="SearchForm__contfilm">
            <input
              name="checkbox"
              className="SearchForm__checkbox"
              type="checkbox"
              role="switch"
              value=""
              checked={isShort}
              onChange={handleCheckbox}
              disabled={isFormDisabled}
            />
            <span className="SearchForm__switcher" />
            <span className="SearchForm__flashFilm">Короткометражки</span>
          </label>
        </div>
        <div className="SearchForm__line" />
      </form>
    </div>
  )
}