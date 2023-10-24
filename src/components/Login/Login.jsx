import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { Logo } from "../Logo/Logo";
import { ButtonFormSubmit } from "../ButtonFormSubmit/ButtonFormSubmit";

export function Login({ setCurrentUser }) {
  const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidation();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setCurrentUser((prev) => ({ ...prev, email: values.email, isLogIn: true }))
    navigate("/movies", { replace: true });
  }

  return (
    <section className="login">
      <div className="login__container">
        <form className="form__login" name="login" noValidate onSubmit={handleLogin}>
          <Logo />
          <h1 className="form__title form__title__profile">Рады видеть!</h1>
          <div className="form__container__login">
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
          <div className="form__navigate__login">
            <ButtonFormSubmit isValid={isValid} text="Войти" />
            <span className="form__login__regestration">
              Ещё не зарегистрированы?
              <Link to='/signup' className="form__login__link">
                Регистрация
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  )
}