import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { Logo } from "../Logo/Logo";
import { useState } from "react";
import { REGISTRATION_ERROR } from "../../utils/constants";
import { ButtonFormSubmit } from "../ButtonFormSubmit/ButtonFormSubmit";


export function Register({ setCurrentUser }) {
  const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidation();
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
              <span className="register__input-error register__input-error_name">{errors["name"]}</span>
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
            <span className="register__regestration">
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