import "./SavedMovies.css"
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export function SavedMovies() {
  return (
    <>
      <Header />
      <main className="savedMovies">
        <SearchForm></SearchForm>
        <MoviesCardList></MoviesCardList>
      </main>
      <Footer />
    </>
  )
}