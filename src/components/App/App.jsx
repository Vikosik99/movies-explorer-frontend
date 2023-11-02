import "./App.css"
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { NotFound } from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";

export function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    isLoggedIn: !!localStorage.getItem("jwt")
  });
  const navigate = useNavigate();
  const [savedMovies, setSavedMovies] = useState([]);
  const [sourceMovies, setSourceMovies] = useState([]);

  function handleLogout() {
    setCurrentUser(() => ({name: "", email: "", isLoggedIn: false}));
    localStorage.clear();
    setSavedMovies([]);
    navigate("/", {replace: true});
  }

  async function loadInitialData() {
    try {
      const {name, email} = await mainApi.getUserInfo();
      setCurrentUser(() => ({name, email, isLoggedIn: true}));
      const savedCards = await mainApi.getCards();
      setSavedMovies(savedCards);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (localStorage.jwt) {
      loadInitialData().catch(error => console.log(error));
    }
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/signup" element={<Register setCurrentUser={setCurrentUser} />} />
            <Route path="/signin" element={<Login setCurrentUser={setCurrentUser} setSavedMovies={setSavedMovies} />} />
            <Route path="/profile" element={<Profile setCurrentUser={setCurrentUser} handleLogout={handleLogout} />} />
            <Route path="/movies" element={<Movies
              sourceMovies={sourceMovies}
              setSourceMovies={setSourceMovies}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />} />
            <Route path="/saved-movies" element={<SavedMovies
              sourceMovies={sourceMovies}
              setSourceMovies={setSourceMovies}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  )
}