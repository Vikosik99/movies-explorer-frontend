import { Link, useNavigate } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { Logo } from "../Logo/Logo";
import { ButtonFormSubmit } from "../ButtonFormSubmit/ButtonFormSubmit";
import { useState } from "react";
import { responseErrorHandler } from "../../utils/utils";
import { EMAIL_REGEX_STR, LOGIN_ERROR } from "../../utils/constants";
import mainApi from "../../utils/MainApi";

export function Login({setCurrentUser, setSavedMovies}) {
  const {values, handleChange, errors, isValid, setIsValid} = useFormAndValidation();
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setIsValid(false);
    try {
      const {token} = await mainApi.login(values.email, values.password);
      localStorage.setItem("jwt", token)
      const {name, email} = await mainApi.getUserInfo();
      setCurrentUser((prev) => ({...prev, name, email, isLoggedIn: true}));
      const savedCards = await mainApi.getCards();
      setSavedMovies(savedCards);
      navigate("/movies", {replace: true});
    } catch (error) {
      console.log(error);
      const msg = responseErrorHandler(error.status, LOGIN_ERROR)
      setResponseError(msg);
    }
  }

  return (
    <main className="register">
      <section className="register__section">
        <form className="register__form" name="login" noValidate onSubmit={handleLogin}>
          <Logo />
          <h1 className="register__title">Рады видеть!</h1>
          <div className="register__form-container">
            <div className="register__inputs-container">
              <span className="register__span">E-mail</span>
              <input
                name="email"
                className="register__input"
                type="email"
                required
                value={values["email"] || ""}
                onChange={handleChange}
                placeholder="E-mail"
                minLength="8"
                maxLength="30"
                pattern={EMAIL_REGEX_STR}
              />
              <span className="register__input-error">{errors["email"]}</span>
            </div>
            <div className="register__inputs-container">
              <span className="register__span">Пароль</span>
              <input
                name="password"
                className="register__input"
                type="password"
                required
                minLength="4"
                maxLength="30"
                placeholder="Пароль"
                value={values["password"] || ""}
                onChange={handleChange}
              />
              <span className="register__input-error">{errors["password"]}</span>
            </div>
          </div>
          <div className="register__navigate register__navigate_type_login">
            <p className="register__response-error">{responseError}</p>
            <ButtonFormSubmit isValid={isValid} text="Войти" />
            <span className="register__registration">
              Ещё не зарегистрированы?
              <Link to='/signup' className="register__link">
                Регистрация
              </Link>
            </span>
          </div>
        </form>
      </section>
    </main>
  )
}