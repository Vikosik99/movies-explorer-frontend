import "./Register.css"
import logoHeader from "../../images/header-logo-standart.svg"
import { Link } from "react-router-dom";


export function Register() {
  return (
    <div className="register">
      <form className="form__login" name="login" noValidate>
        <button className="header__logo">
          <img
            className="logo"
            src={logoHeader}
            alt="логотип"
          />
        </button>
        <h1 className="form__title form__title__profile">Добро пожаловать!</h1>
        <div className="form__container__login">
          <div className="form__inputs__login">
            <span className="form__span__login">Имя</span>
            <input
              name="name"
              className="form__input__login"
              type="email"
              required
            />
            <span className="form__input_error_email"></span>
          </div>
          <div className="form__inputs__login">
            <span className="form__span__login">E-mail</span>
            <input
              name="email"
              className="form__input__login"
              type="email"
              required
            />
            <span className="form__input_error_email"></span>
          </div>
          <div className="form__inputs__login">
            <span className="form__span__login">Пароль</span>
            <input
              name="pasword"
              className="form__input__login"
              type="text"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="form__input_error_name"></span>
          </div>
        </div>
        <div className="form__navigate__register">
          <button
            type="submit"
            className="form__navigate__button profile__button_disabled"
          >
            Зарегистрироваться
          </button>
          <span className="form__login__regestration">
            Уже зарегистрированы?
            <Link to='/signup' className="form__login__link">
              Войти
            </Link>
          </span>
        </div>
      </form>
    </div>
  )
}