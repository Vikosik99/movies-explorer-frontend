import "./MoviesCardList.css"
import { MoviesCard } from "../MoviesCard/MoviesCard";


export function MoviesCardList() {
  return (
    <div className="MoviesCardList">
      <section className="elements elements__savedMovies" >
        <MoviesCard />
      </section>
      <div className="elements__more elements__more_hide">
        <button className="elements__more__button">Ещё</button>
      </div>
    </div>
  )
}