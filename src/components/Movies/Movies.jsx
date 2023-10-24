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
        <div className="movies__more movies__more_hide">
          <button className="movies__more-button">Ещё</button>
        </div>
      </main>
      <Footer />
    </>
  )
}