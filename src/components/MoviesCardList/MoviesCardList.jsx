import "./MoviesCardList.css"
import { MoviesCard } from "../MoviesCard/MoviesCard";


export function MoviesCardList() {
  return (
    <div className="MoviesCardList">
      <div className="elements__container">
        <section className="elements elements__savedMovies" >
          <MoviesCard />
        </section>
      </div>
    </div>
  )
}