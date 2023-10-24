import "./Header.css"
import menIcon from "../../images/header-icon-men.svg"
import closeIcon from "../../images/header-button-close.svg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";


export function Header() {
  const navigate = useNavigate();

  return (
    <header className="header header_movies">
      <div className="header__container">
        <Logo />
        <div className="header__navigation">
          <div className="header__burger">
            <span></span>
          </div>
          <div className="header__menu header__menu_navigate header__menu_notauthorization">
            <button
              type="button"
              className={`header__button-close header__button-close_active`}
            // onClick={onClose}
            >
              <img
                className="header__close"
                src={closeIcon}
                alt="крест"
              />
            </button>
            <div className="header__films header__films_hide">
              <Link className="header__home" target="_blank" to="http://localhost:3000/">Главная</Link>
              <Link className="header__film" target="_blank" to="http://localhost:3000/movies">Фильмы</Link>
              <Link className="header__filmSave" target="_blank" to="http://localhost:3000/saved-movies">Сохранённые фильмы</Link>
            </div>
            <div className="header__authorization header__authorization_hide">
              <button className="header__log">Аккаунт</button>
              <button className="header__men">
                <img
                  className="men"
                  src={menIcon}
                  alt="иконка человека"
                />
              </button>
            </div>
            <div className="header__notauthorization">
              <button className="header__reg" onClick={() => navigate("/signup")}>Регистрация</button>
              <button className="header__comein" onClick={() => navigate("/signin")}>Войти</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}