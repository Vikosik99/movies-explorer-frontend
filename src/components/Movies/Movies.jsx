import "./Movies.css"
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import useSearchForm from "../../hooks/useSearchForm";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import { EMPTY_MESSAGE, NETWORK_ERROR } from "../../utils/constants";
import { useLayout } from "../../hooks/useLayout";

const MOVIE_ARRAY = [
  {
    id: 1,
    image: "../films/film-33SlovaO.png",
    duration: 102,
    saved: true,
    nameRU: "33 слова о дизайне"
  },
  {
    id: 2,
    image: "../films/film-kinoalmanah100Let.png",
    duration: 102,
    saved: false,
    nameRU: "Киноальманах «100 лет дизайна»"
  },
  {
    id: 3,
    image: "../films/film-vPogoneZa.png",
    duration: 102,
    saved: false,
    nameRU: "В погоне за Бенкси"
  },
  {
    id: 4,
    image: "../films/film-bacsia.png",
    duration: 102,
    saved: false,
    nameRU: "Баския: Взрыв реальности"
  },
  {
    id: 5,
    image: "../films/film-beg-eto-svoboda.png",
    duration: 102,
    saved: true,
    nameRU: "Бег это свобода"
  },
  {
    id: 6,
    image: "../films/film-kinotorgovtsi.png",
    duration: 102,
    saved: true,
    nameRU: "Книготорговцы"
  },
  {
    id: 7,
    image: "../films/film-kogda-i-dymayu.png",
    duration: 102,
    saved: false,
    nameRU: "Когда я думаю о Германии ночью"
  }, {
    id: 8,
    image: "../films/film-GimmeDanger.png",
    duration: 102,
    saved: false,
    nameRU: "Gimme Danger: История Игги и The Stooges"
  },
  {
    id: 9,
    image: "../films/film-DhenisMalinkaya.png",
    duration: 102,
    saved: true,
    nameRU: "Дженис: Маленькая девочка грустит"
  },
  {
    id: 10,
    image: "../films/film-soberisPered.png",
    duration: 102,
    saved: false,
    nameRU: "Соберись перед прыжком"
  },
  {
    id: 11,
    image: "../films/film-PiDsheyHarvi.png",
    duration: 102,
    saved: false,
    nameRU: "Пи Джей Харви: A dog called money"
  },
  {
    id: 12,
    image: "../films/film-poVolnam.png",
    duration: 102,
    saved: false,
    nameRU: "По волнам: Искусство звука в кино"
  }, {
    id: 13,
    image: "../films/film-rudboy.png",
    duration: 102,
    saved: false,
    nameRU: "Рудбой"
  },
  {
    id: 14,
    image: "../films/film-skeytKuhnya.png",
    duration: 102,
    saved: false,
    nameRU: "Скейт — кухня"
  },
  {
    id: 15,
    image: "../films/film-voinaIskustv.png",
    duration: 102,
    saved: false,
    nameRU: "Война искусств"
  },
  {
    id: 16,
    image: "../films/film-zona.png",
    duration: 102,
    saved: true,
    nameRU: "Зона"
  },
  {
    id: 17,
    image: "../films/film-33SlovaO.png",
    duration: 102,
    saved: true,
    nameRU: "33 слова о дизайне"
  }
]


export function Movies() {
  const [moviesArray, setMoviesArray] = useState(MOVIE_ARRAY);
  const {inputValue, setInputValue, isShort, setIsShort, handleChange, handleCheckboxChange} = useSearchForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);
  const {movieRenderCounter, handleMore, isButtonPresent} = useLayout(moviesArray.length);

  function searchMovies() {

  }

  async function handleShort(e) {
    await handleCheckboxChange(e);
  }

  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm
          onSearch={searchMovies}
          inputValue={inputValue}
          isShort={isShort}
          onChange={handleChange}
          onShort={handleShort}
        />
        {isLoading ? <Preloader /> : moviesArray &&
          <MoviesCardList moviesArray={moviesArray.slice(0, movieRenderCounter)} />}
        {isEmptyInput && <p className="empty-search">{EMPTY_MESSAGE}</p>}
        {isNetworkError && <p className="error-text">{NETWORK_ERROR}</p>}
        {isButtonPresent && <div className="movies__more">
          <button className="movies__more-button" onClick={handleMore}>Ещё</button>
        </div>}
      </main>
      <Footer />
    </>
  )
}