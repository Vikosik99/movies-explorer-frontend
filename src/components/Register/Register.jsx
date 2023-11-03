import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { Logo } from "../Logo/Logo";
import { useState } from "react";
import { EMAIL_REGEX_STR, REGISTRATION_ERROR } from "../../utils/constants";
import { ButtonFormSubmit } from "../ButtonFormSubmit/ButtonFormSubmit";
import mainApi from "../../utils/MainApi";
import { responseErrorHandler } from "../../utils/utils";


export function Register({setCurrentUser}) {
  const {values, handleChange, errors, isValid, setIsValid} = useFormAndValidation();
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setIsValid(false);
    try {
      await mainApi.register(values.name, values.email, values.password);
      const {token} = await mainApi.login(values.email, values.password);
      localStorage.setItem("jwt", token);
      const {name, email} = await mainApi.getUserInfo();
      setCurrentUser((prev) => ({...prev, name, email, isLoggedIn: true}));
      navigate("/movies", {replace: true});
    } catch (error) {
      console.log(error);
      const msg = responseErrorHandler(error.status, REGISTRATION_ERROR)
      setResponseError(msg);
    }
  }

  return (
    <main className="register">
      <section className="register__section">
        <form className="register__form" name="register" noValidate onSubmit={handleRegister}>
          <Logo />
          <h1 className="register__title">Добро пожаловать!</h1>
          <div className="register__form-container">
            <div className="register__inputs-container">
              <span className="register__span">Имя</span>
              <input
                placeholder="Имя"
                name="name"
                className="register__input"
                type="text"
                required
                minLength="2"
                maxLength="30"
                value={values["name"] || ""}
                onChange={handleChange}
              />
              <span className="register__input-error">{errors["name"]}</span>
            </div>
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
              <span className="register__input-error register__input-error_email">{errors["email"]}</span>
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
              <span className="register__input-error register__input-error_password">{errors["password"]}</span>
            </div>
          </div>
          <div className="register__navigate">
            <p className="register__response-error">{responseError}</p>
            <ButtonFormSubmit isValid={isValid} text="Зарегистрироваться" />
            <span className="register__registration">
              Уже зарегистрированы?
              <Link to='/signin' className="register__link">
                Войти
              </Link>
            </span>
          </div>
        </form>
      </section>
    </main>
  )
}