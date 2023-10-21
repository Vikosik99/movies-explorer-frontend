import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { Logo } from "../Logo/Logo";
import { useState } from "react";
import { REGISTRATION_ERROR } from "../../utils/constants";
import { ButtonFormSubmit } from "../ButtonFormSubmit/ButtonFormSubmit";


export function Register({setCurrentUser}) {
  const {values, handleChange, errors, isValid, setIsValid} = useFormAndValidation();
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    setResponseError(REGISTRATION_ERROR);
    // setCurrentUser(() => ({name: values.name, email: values.email, isLoggedIn: true}))
    // navigate("/movies", {replace: true});
  }

  return (
    <main className="register">
      <section>
        <form className="form__login" name="login" noValidate onSubmit={handleRegister}>
          <Logo />
          <h1 className="form__title form__title__profile">Добро пожаловать!</h1>
          <div className="form__container__login">
            <div className="form__inputs__login">
              <span className="form__span__login">Имя</span>
              <input
                placeholder="Name"
                name="name"
                className="form__input__login"
                type="text"
                required
                minLength="2"
                maxLength="30"
                value={values["name"] || ""}
                onChange={handleChange}
              />
              <span className="form__input_error_email">{errors["name"]}</span>
            </div>
            <div className="form__inputs__login">
              <span className="form__span__login">E-mail</span>
              <input
                name="email"
                className="form__input__login"
                type="email"
                required
                value={values["email"] || ""}
                onChange={handleChange}
                placeholder="Email"
                minLength="8"
                maxLength="30"
              />
              <span className="form__input_error_email">{errors["email"]}</span>
            </div>
            <div className="form__inputs__login">
              <span className="form__span__login">Пароль</span>
              <input
                name="password"
                className="form__input__login"
                type="password"
                required
                minLength="4"
                maxLength="30"
                placeholder="Password"
                value={values["password"] || ""}
                onChange={handleChange}
              />
              <span className="form__input_error_name">{errors["password"]}</span>
            </div>
          </div>
          <div className="form__navigate__register">
            <p className="form__response-error">{responseError}</p>
            <ButtonFormSubmit isValid={isValid} text="Зарегистрироваться"/>
            <span className="form__login__regestration">
            Уже зарегистрированы?
            <Link to='/signin' className="form__login__link">
              Войти
            </Link>
          </span>
          </div>
        </form>
      </section>
    </main>
  )
}