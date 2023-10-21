import "./Profile.css"

export function Profile() {
  return (
    <div className="profile">
      <form className="form form__profile" name="profile" noValidate>
        <h1 className="form__title form__title__profile">Привет, Виктория</h1>
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
            />
            <span className="form__input_error_name"></span>
          </div>
          <div className="form__inputs">
            <span className="form__span">E-mail</span>
            <input
              name="email"
              className="form__input"
              type="email"
              required
            />
            <span className="form__input_error_email"></span>
          </div>
        </div>
        <div className="form__navigate form__navigate__profile">
          <button
            type="submit"
            className="form__navigate__button-edit profile__button-edit_disabled"
          >
            Редактировать
          </button>
          <button type="submit" className="form__navigate__button-exit">
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </div>
  )
}