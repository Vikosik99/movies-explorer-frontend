import "./MoviesCardList.css"
import { MoviesCard } from "../MoviesCard/MoviesCard";


export function MoviesCardList() {
  return (
    <div>
      <section className="elements" >
        <MoviesCard />
      </section>
      <div className="elements__more">
        <button className="elements__more__button">Ещё</button>
      </div>
    </div>
  )
}