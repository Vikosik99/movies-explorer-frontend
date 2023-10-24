export function ButtonFormSubmit({ isValid, text }) {
  return (
    <button
      type="submit"
      disabled={!isValid}
      className={`navigate-button ${isValid ? "" : "navigate-button_disabled"}`}
    >
      {text}
    </button>
  )
}