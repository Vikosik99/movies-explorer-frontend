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
        <form className="login__form" name="login" noValidate onSubmit={handleLogin}>
          <Logo />
          <h1 className="login__title">Рады видеть!</h1>
          <div className="login__form-container">
            <div className="login__inputs-container">
              <span className="login__span">E-mail</span>
              <input
                name="email"
                className="login__input"
                type="email"
                required
                value={values["email"] || ""}
                onChange={handleChange}
                placeholder="E-mail"
                minLength="8"
                maxLength="30"
              />
              <span className="login__input-error login__input-error_email">{errors["email"]}</span>
            </div>
            <div className="login__inputs-container">
              <span className="login__span">Пароль</span>
              <input
                name="password"
                className="login__input"
                type="password"
                required
                minLength="4"
                maxLength="30"
                placeholder="Пароль"
                value={values["password"] || ""}
                onChange={handleChange}
              />
              <span className="login__input-error login__input-error_password">{errors["password"]}</span>
            </div>
          </div>
          <div className="login__navigate">
            <ButtonFormSubmit isValid={isValid} text="Войти" />
            <span className="login__regestration">
              Ещё не зарегистрированы?
              <Link to='/signup' className="login__link">
                Регистрация
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  )
}