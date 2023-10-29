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

export function useLayout(moviesListLength) {
  const [movieRenderCounter, setMovieRenderCounter] = useState(0);
  const [isButtonPresent, setIsButtonPresent] = useState(false);
  const [moviesCounterObject, setMoviesCounterObject] = useState({initial: DESKTOP_INIT, more: DESKTOP_MORE, saved:3});

  function handleMore() {
    const newMovieCounter = movieRenderCounter + moviesCounterObject.more;
    if (moviesListLength > newMovieCounter) {
      setIsButtonPresent(true);
      setMovieRenderCounter(newMovieCounter);
    } else if (moviesListLength > movieRenderCounter) {
      setIsButtonPresent(false);
      setMovieRenderCounter(newMovieCounter);
    } else {
      setIsButtonPresent(false);
    }
  }

  const handleScreen = () => {
    if (window.innerWidth < TABLET_WIDTH) {
      setMoviesCounterObject({initial: MOBILE_INIT, more: MOBILE_MORE, saved:2});
    } else if (window.innerWidth >= TABLET_WIDTH && window.innerWidth < LAPTOP_WIDTH) {
      setMoviesCounterObject({initial: TABLET_INIT, more: TABLET_MORE, saved:3});
    } else if (window.innerWidth >= LAPTOP_WIDTH && window.innerWidth < DESKTOP_WIDTH) {
      setMoviesCounterObject({initial: LAPTOP_INIT, more: LAPTOP_MORE, saved:3});
    } else {
      setMoviesCounterObject({initial: DESKTOP_INIT, more: DESKTOP_MORE, saved:3});
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
    setIsButtonPresent(moviesListLength > moviesCounterObject.initial);
  }, [moviesCounterObject.initial])

  return {movieRenderCounter, isButtonPresent, handleMore, moviesCounterObject}
}