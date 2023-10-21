import "./Profile.css"
import { Header } from "../Header/Header";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { ButtonFormSubmit } from "../ButtonFormSubmit/ButtonFormSubmit";
import { PROFILE_CHANGE_SUCCESS } from "../../utils/constants";

export function Profile({handleLogout, setCurrentUser}) {
  const currentUser = useContext(CurrentUserContext);
  const {values, handleChange, errors, isValid, setIsValid, setValues} = useFormAndValidation();
  const [isSubmitVisible, setIsSubmitVisible] = useState(false);
  const [response, setResponse] = useState({type: "", message: ""});

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentUser((prev) => ({...prev, name: values.name, email: values.email}));
    setIsSubmitVisible(false);
    setResponse({type: "info", message: PROFILE_CHANGE_SUCCESS});
  }

  function handleChangeInfo(e) {
    setIsSubmitVisible(true);
    setResponse({type: "info", message: ""});
  }

  useEffect(() => {
    setValues({name: currentUser.name, email: currentUser.email});
  }, [currentUser.email, currentUser.name])

  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <form className="form form__profile" name="profile" noValidate onSubmit={handleSubmit}>
            <h1 className="form__title form__title__profile">Привет, {currentUser.name}!</h1>
            <div className="form__container form__container__profile">
              <div className="form__inputs">
                <span className="form__span">Имя</span>
                <input
                  name="name"
                  className="form__input"
                  type="text"
                  required
                  minLength="2"
                  maxLength="30"
                  value={values["name"] || ""}
                  onChange={handleChange}
                  disabled={!isSubmitVisible}
                />
                <span className="form__input_error_name">{errors["name"]}</span>
              </div>
              <div className="form__inputs">
                <span className="form__span">E-mail</span>
                <input
                  name="email"
                  className="form__input"
                  type="email"
                  required
                  minLength="8"
                  maxLength="30"
                  value={values["email"] || ""}
                  onChange={handleChange}
                  disabled={!isSubmitVisible}
                />
                <span className="form__input_error_email">{errors["email"]}</span>
              </div>
            </div>
            <div className="form__navigate form__navigate__profile">
              <p
                className={`form__response ${response.type === "info" ? "form__response_type_info" : "form__response_type_error"}`}>
                {response.message}
              </p>
              {isSubmitVisible
                ?
                <ButtonFormSubmit isValid={isValid} text="Сохранить" />
                :
                <>
                  <button
                    type="button"
                    className="form__navigate__button-edit profile__button-edit_disabled"
                    onClick={handleChangeInfo}
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="form__navigate__button-exit">
                    Выйти из аккаунта
                  </button>
                </>
              }
            </div>
          </form>
        </section>
      </main>
    </>
  )
}