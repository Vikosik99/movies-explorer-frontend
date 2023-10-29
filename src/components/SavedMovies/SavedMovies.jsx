import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import useSearchForm from "../../hooks/useSearchForm";
import { useLayout } from "../../hooks/useLayout";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import { EMPTY_MESSAGE, NETWORK_ERROR } from "../../utils/constants";

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
    saved: true,
    nameRU: "Киноальманах «100 лет дизайна»"
  },
  {
    id: 3,
    image: "../films/film-vPogoneZa.png",
    duration: 102,
    saved: true,
    nameRU: "В погоне за Бенкси"
  }
]

export function SavedMovies() {
  const [moviesArray, setMoviesArray] = useState(MOVIE_ARRAY);
  const {inputValue, setInputValue, isShort, setIsShort, handleChange, handleCheckboxChange} = useSearchForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);
  const {moviesCounterObject} = useLayout(moviesArray.length);

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
          <MoviesCardList moviesArray={moviesArray.slice(0, moviesCounterObject.saved)} />}
        {isNetworkError && <p className="error-text">{NETWORK_ERROR}</p>}
        {isEmptyInput && <p className="empty-search">{EMPTY_MESSAGE}</p>}
      </main>
      <Footer />
    </>
  )
}