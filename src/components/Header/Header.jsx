import "./Header.css"
import logoHeader from "../../images/header-logo-standart.svg"
import menIcon from "../../images/header-icon-men.svg"
import closeIcon from "../../images/header-button-close.svg"


export function Header() {
  return (
    <header className="header header__movies">
      <button className="header__logo">
        <img
          className="logo"
          src={logoHeader}
          alt="логотип"
        />
      </button>
      <div className="header__container">
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
            <button className="header__home">Главная</button>
            <button className="header__film">Фильмы</button>
            <button className="header__filmSave">Сохранённые фильмы</button>
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
            <button className="header__reg">Регистрация</button>
            <button className="header__comein">Войти</button>
          </div>
        </div>
      </div>
    </header>
  )
}