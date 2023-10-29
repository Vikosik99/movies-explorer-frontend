import "./Header.css"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


export function Header() {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === "/" ? "" :"header_theme_movies"}`}>
      <div className="header__container">
        <Logo />
        <div className="header__navigation">
          {currentUser.isLoggedIn ?
            <>
              <div className={`header__menu${isMenuOpen ? " header__menu_navigate" : ""}`}>
                <button
                  type="button"
                  className={`header__button ${isMenuOpen ? "header__button-close" : ""}`}
                  onClick={() => setIsMenuOpen(prev => !prev)}
                />
                <ul className={`header__films ${isMenuOpen ? "header__films_active" : ""}`}>
                  {isMenuOpen && <li className="header__film-main">
                    <NavLink
                      className={({isActive}) => `header__film ${isActive ? "header__film_active": ""}`}
                      to="/">
                      Главная
                    </NavLink>
                  </li>}
                  <li>
                    <NavLink
                      className={({isActive}) => `header__film ${isActive ? "header__film_active": ""}`}
                      to="/movies">
                      Фильмы
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({isActive}) => `header__film ${isActive ? "header__film_active": ""}`}
                      to="/saved-movies">
                      Сохранённые фильмы
                    </NavLink>
                  </li>
                  <li className="header__account">
                    <Link
                      className="header__film-profile"
                      to="/profile">
                      Аккаунт
                      <div
                        className={`header__profile-image ${location.pathname === '/' ? '' : ' header__profile-image_theme_main'}`}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </>
            :
            <div className="header__notauthorization">
              <button className="header__reg" onClick={() => navigate("/signup")}>Регистрация</button>
              <button className="header__come-in" onClick={() => navigate("/signin")}>Войти</button>
            </div>
          }
        </div>
      </div>
    </header>
  )
}