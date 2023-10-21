import "./MoviesCardList.css"
import { MoviesCard } from "../MoviesCard/MoviesCard";


export function MoviesCardList() {
  return (
    <div className="MoviesCardList">
      <section className="elements elements__savedMovies" >
        <MoviesCard />
      </section>
    </div>
  )
}