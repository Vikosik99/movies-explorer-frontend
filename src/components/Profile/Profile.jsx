import "./Profile.css"
import { Header } from "../Header/Header";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { ButtonFormSubmit } from "../ButtonFormSubmit/ButtonFormSubmit";
import { PROFILE_CHANGE_SUCCESS } from "../../utils/constants";

export function Profile({ handleLogout, setCurrentUser }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setIsValid, setValues } = useFormAndValidation();
  const [isSubmitVisible, setIsSubmitVisible] = useState(false);
  const [response, setResponse] = useState({ type: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentUser((prev) => ({ ...prev, name: values.name, email: values.email }));
    setIsSubmitVisible(false);
    setResponse({ type: "info", message: PROFILE_CHANGE_SUCCESS });
    setIsValid(false);
  }

  function handleChangeInfo(e) {
    setIsSubmitVisible(true);
    setResponse({ type: "info", message: "" });
  }

  function handleProfileChange(e) {
    handleChange(e);
    const {name, value} = e.target
    if ((name === "name" && value === currentUser.name) && (values["email"] === currentUser.email)) {
      setIsValid(false);
    }
    if ((name === "email" && value === currentUser.email) && (values["name"] === currentUser.name)) {
      setIsValid(false);
    }
  }

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser.email, currentUser.name])

  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <form className="profile__form" name="profile" noValidate onSubmit={handleSubmit}>
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <div className="profile__form-container">
              <div className="profile__inputs-container">
                <span className="profile__span">Имя</span>
                <input
                  name="name"
                  className="profile__input"
                  type="text"
                  required
                  minLength="2"
                  maxLength="30"
                  value={values["name"] || ""}
                  onChange={handleProfileChange}
                  disabled={!isSubmitVisible}
                />
                <span className="profile__input-error profile__input-error_name">{errors["name"]}</span>
              </div>
              <div className="profile__inputs-container">
                <span className="profile__span">E-mail</span>
                <input
                  name="email"
                  className="profile__input"
                  type="email"
                  required
                  minLength="8"
                  maxLength="30"
                  value={values["email"] || ""}
                  onChange={handleProfileChange}
                  disabled={!isSubmitVisible}
                />
                <span className="profile__input-error profile__input-error_email">{errors["email"]}</span>
              </div>
            </div>
            <div className="profile__navigate">
              <p
                className={`profile__response ${response.type === "info" ? "profile__response_type_info" : "profile__response_type_error"}`}>
                {response.message}
              </p>
              {isSubmitVisible
                ?
                <ButtonFormSubmit isValid={isValid} text="Сохранить" />
                :
                <>
                  <button
                    type="button"
                    className="profile__button-edit profile__button-edit_disabled"
                    onClick={handleChangeInfo}
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="profile__button-exit">
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