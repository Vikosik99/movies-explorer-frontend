import "./MoviesCardList.css"
import { MoviesCard } from "../MoviesCard/MoviesCard";


export function MoviesCardList() {
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        <section className="moviesCardList__elements moviesCardList__elements_savedMovies" >
          <MoviesCard />
        </section>
      </div>
    </section>
  )
}