import "./SearchForm.css"
import search from "../../images/film-icon-lupa.svg"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function SearchForm({inputValue, isShort, onSearch, onShort, onChange}) {
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [isKeyWordAbsent, setIsKeyWordAbsent] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => setIsKeyWordAbsent(false), [inputValue]);

  function handleCheckbox(e) {
    setIsFormDisabled(() => true);
    if (pathname === "/saved-movies") {
      onShort(e);
    } else {
      inputValue.trim() ? onShort(e) : setIsKeyWordAbsent(false);
    }
    setIsFormDisabled(() => false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsFormDisabled(() => true);
    inputValue.trim() ? onSearch(inputValue, isShort) : setIsKeyWordAbsent(true);
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
        {isKeyWordAbsent && <p className="error-text">Нужно ввести ключевое слово</p>}
        <div className="SearchForm__line" />
      </form>
    </div>
  )
}