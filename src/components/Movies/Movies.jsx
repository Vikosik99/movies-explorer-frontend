import "./Movies.css"
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";


export function Movies() {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm></SearchForm>
        <MoviesCardList></MoviesCardList>
        <div className="elements__more elements__more_hide">
          <button className="elements__more__button">Ещё</button>
        </div>
      </main>
      <Footer />
    </>
  )
}