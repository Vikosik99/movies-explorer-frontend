import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import useSearchForm from "../../hooks/useSearchForm";
import { useLayout } from "../../hooks/useLayout";
import { useEffect, useState } from "react";
import { EMPTY_MESSAGE, NETWORK_ERROR } from "../../utils/constants";
import { filterSearch, updateLocalStorage } from "../../utils/movies";
import mainApi from "../../utils/MainApi";

export function SavedMovies({sourceMovies, setSourceMovies, savedMovies, setSavedMovies}) {
  const {inputValue, isShort, handleChange, handleCheckboxChange} = useSearchForm();
  const [isEmptyMoviesArray, setIsEmptyMoviesArray] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);
  const {moviesCounterObject, moviesArray, setMoviesArray} = useLayout();

  function mainHandler(text, isShort, movies) {
    const result = filterSearch(text, isShort, movies);
    setMoviesArray(result);
    if (!result.length) {
      setIsEmptyMoviesArray(true);
    }
  }

  function searchMovies(text, isShort) {
    mainHandler(text, isShort, savedMovies);
  }

  async function handleShort(e) {
    await handleCheckboxChange(e);
    const isShort = e.target.checked;
    mainHandler(inputValue, isShort, savedMovies);
  }

  async function dislike(movie) {
    try {
      await mainApi.deleteCard(movie._id);
      const sourceMovie = sourceMovies.find(item => movie.movieId === item.id)
      sourceMovie.saved = false;
      updateLocalStorage(sourceMovie);
      setSavedMovies(savedMovies.filter(item => item.movieId !== movie.movieId));
      setSourceMovies(sourceMovies.map(item => (item.id === sourceMovie.id) ? sourceMovie : item));
      setMoviesArray(moviesArray.filter(item => item.movieId !== movie.movieId ));
      if (moviesArray.length <= 1) {
        setIsEmptyMoviesArray(true);
      }
    } catch (error) {
      setIsNetworkError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    setIsEmptyMoviesArray(false);
    setIsNetworkError(false);
  }, [inputValue, isShort]);

  useEffect(() => setMoviesArray(savedMovies), [!!savedMovies.length])

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
        {moviesArray &&
          <MoviesCardList moviesArray={moviesArray.slice(0, moviesCounterObject.initial)} onDislike={dislike}/>}
        {isNetworkError && <p className="error-text">{NETWORK_ERROR}</p>}
        {isEmptyMoviesArray && <p className="empty-search">{EMPTY_MESSAGE}</p>}
      </main>
      <Footer />
    </>
  )
}