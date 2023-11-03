import "./Movies.css"
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import useSearchForm from "../../hooks/useSearchForm";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import { EMPTY_MESSAGE, NETWORK_ERROR } from "../../utils/constants";
import { useLayout } from "../../hooks/useLayout";
import moviesApi from "../../utils/MoviesApi";
import { filterSearch, Movie, updateLocalStorage } from "../../utils/movies";
import mainApi from "../../utils/MainApi";

export function Movies({sourceMovies, setSourceMovies, savedMovies, setSavedMovies}) {
  const {inputValue, setInputValue, isShort, setIsShort, handleChange, handleCheckboxChange} = useSearchForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyMoviesArray, setIsEmptyMoviesArray] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);
  const {movieRenderCounter, handleMore, isButtonPresent, moviesArray, setMoviesArray} = useLayout();

  function mainHandler(text, isShort, movies) {
    const result = filterSearch(text, isShort, movies);
    localStorage.setItem("text", JSON.stringify(text));
    localStorage.setItem("isShort", JSON.stringify(isShort));
    localStorage.setItem("movies", JSON.stringify(result));
    setMoviesArray(result);
    if (!result.length) {
      setIsEmptyMoviesArray(true);
    }
  }

  async function getSourceMovies() {
    setIsLoading(true);
    try {
      return await moviesApi.getCards();
    } catch (error) {
      setIsNetworkError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function updateSourceMovies(pureSourceMoviesList) {
    return pureSourceMoviesList.map((movie) => {
      const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === movie.id)
      if (savedMovie) {
        return {...movie, saved: true, _id: savedMovie['_id']}
      } else {
        return {...movie, saved: false}
      }
    })
  }

  async function searchMovies(text, isShort) {
    if (!sourceMovies.length) {
      const result = await getSourceMovies();
      const updatedMoviesList = updateSourceMovies(result);
      setSourceMovies(updatedMoviesList);
      mainHandler(text, isShort, updatedMoviesList);
    } else {
      mainHandler(text, isShort, sourceMovies);
    }
  }

  async function handleShort(e) {
    await handleCheckboxChange(e);
    const isShort = e.target.checked
    if (!sourceMovies.length) {
      const result = await getSourceMovies();
      const updatedMoviesList = updateSourceMovies(result);
      setSourceMovies(updatedMoviesList);
      mainHandler(inputValue, isShort, updatedMoviesList);
    } else {
      mainHandler(inputValue, isShort, sourceMovies);
    }
  }

  async function likeMovie(movie) {
    try {
      const res = await mainApi.createNewCard(new Movie(movie));
      movie._id = res["_id"]
      movie.saved = true;
      updateLocalStorage(movie);
      setSavedMovies(prev => [...prev, res]);
      setSourceMovies(sourceMovies.map((item) => (item.id === movie.id) ? movie : item));
      setMoviesArray(moviesArray.map((item) => (item.id === movie.id) ? movie : item));
    } catch (error) {
      setIsNetworkError(true);
      console.log(error);
    }
  }

  async function dislike(movie) {
    try {
      await mainApi.deleteCard(movie._id);
      movie.saved = false;
      updateLocalStorage(movie);
      setSavedMovies(prev => prev.filter(item => item.movieId !== movie.id));
      setSourceMovies(sourceMovies.map((item) => (item.id === movie.id) ? movie : item));
      setMoviesArray(moviesArray.map((item) => (item.id === movie.id) ? movie : item));
    } catch (error) {
      setIsNetworkError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    setIsEmptyMoviesArray(false);
    setIsNetworkError(false);
  }, [inputValue, isShort]);

  useEffect(() => {
    const text = JSON.parse(localStorage.getItem("text"));
    const isShort = localStorage.getItem("isShort");
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (text && isShort && movies) {
      setInputValue(text);
      setIsShort(JSON.parse(isShort));
      mainHandler(text, JSON.parse(isShort), movies)
    }
  }, []);

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
        {isNetworkError && <p className="error-text">{NETWORK_ERROR}</p>}
        {isLoading ? <Preloader /> : moviesArray &&
          <MoviesCardList moviesArray={moviesArray.slice(0, movieRenderCounter)} onLike={likeMovie} onDislike={dislike} />}
        {isEmptyMoviesArray && <p className="empty-search">{EMPTY_MESSAGE}</p>}
        {isButtonPresent && <div className="movies__more">
          <button className="movies__more-button" onClick={handleMore}>Ещё</button>
        </div>}
      </main>
      <Footer />
    </>
  )
}