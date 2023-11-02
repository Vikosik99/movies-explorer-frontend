import { useEffect, useLayoutEffect, useState } from "react";
import {
  DESKTOP_INIT,
  DESKTOP_MORE,
  DESKTOP_WIDTH,
  LAPTOP_INIT,
  LAPTOP_MORE,
  LAPTOP_WIDTH,
  MOBILE_INIT,
  MOBILE_MORE,
  TABLET_INIT,
  TABLET_MORE,
  TABLET_WIDTH
} from "../utils/constants";

export function useLayout() {
  const [moviesArray, setMoviesArray] = useState([]);
  const [movieRenderCounter, setMovieRenderCounter] = useState(0);
  const [isButtonPresent, setIsButtonPresent] = useState(false);
  const [moviesCounterObject, setMoviesCounterObject] = useState({initial: DESKTOP_INIT, more: DESKTOP_MORE});

  function handleMore() {
    const newMovieCounter = movieRenderCounter + moviesCounterObject.more;
    if (moviesArray.length > newMovieCounter) {
      setIsButtonPresent(true);
      setMovieRenderCounter(newMovieCounter);
    } else if (moviesArray.length > movieRenderCounter) {
      setIsButtonPresent(false);
      setMovieRenderCounter(newMovieCounter);
    } else {
      setIsButtonPresent(false);
    }
  }

  const handleScreen = () => {
    if (window.innerWidth < TABLET_WIDTH) {
      setMoviesCounterObject({initial: MOBILE_INIT, more: MOBILE_MORE});
    } else if (window.innerWidth >= TABLET_WIDTH && window.innerWidth < LAPTOP_WIDTH) {
      setMoviesCounterObject({initial: TABLET_INIT, more: TABLET_MORE});
    } else if (window.innerWidth >= LAPTOP_WIDTH && window.innerWidth < DESKTOP_WIDTH) {
      setMoviesCounterObject({initial: LAPTOP_INIT, more: LAPTOP_MORE});
    } else {
      setMoviesCounterObject({initial: DESKTOP_INIT, more: DESKTOP_MORE});
    }
  }

  useLayoutEffect(() => {
    handleScreen();
    window.addEventListener('resize', handleScreen);
    return () => {
      window.removeEventListener('resize', handleScreen);
    };
  }, []);

  useEffect(() => {
    setMovieRenderCounter(moviesCounterObject.initial);
    setIsButtonPresent(moviesArray.length > moviesCounterObject.initial);
  }, [moviesCounterObject.initial])

  useEffect(() => setIsButtonPresent(moviesArray.length > moviesCounterObject.initial), [moviesArray.length])

  return {movieRenderCounter, isButtonPresent, handleMore, moviesCounterObject, moviesArray, setMoviesArray}
}