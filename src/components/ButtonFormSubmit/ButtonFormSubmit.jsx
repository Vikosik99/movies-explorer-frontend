export function ButtonFormSubmit({isValid, text}) {
  return (
    <button
      type="submit"
      disabled={!isValid}
      className={`form__navigate-button ${isValid ? "" : "form__navigate-button_disabled"}`}
    >
      {text}
    </button>
  )
}