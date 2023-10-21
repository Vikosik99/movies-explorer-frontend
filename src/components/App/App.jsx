import "./App.css"
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { NotFound } from "../NotFound/NotFound";

export function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false
  });
  const navigate = useNavigate();

  function handleLogout() {
    setCurrentUser(() => ({name: "", email: "", isLoggedIn: false}));
    navigate("/", {replace: true});
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Register setCurrentUser={setCurrentUser} />} />
          <Route path="/signin" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/profile" element={<Profile setCurrentUser={setCurrentUser} handleLogout={handleLogout} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  )
}