import "./MoviesCardList.css"
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";


export function MoviesCardList({moviesArray, onLike, onDislike}) {
  const location = useLocation();

  return (
      <section className="movies-list">
        <ul className={`movies-list__elements${location.pathname === "/saved-movies" ? " movies-list__elements_saved" : ""}`} >
          {moviesArray.map(item => <MoviesCard onLike={onLike} onDislike={onDislike} movie={item} key={item["id"] || item["movieId"]}/>)}
        </ul>
      </section>
  )
}