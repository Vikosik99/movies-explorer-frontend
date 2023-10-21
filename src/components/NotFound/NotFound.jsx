import "./NotFound.css"

export function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound__container">
        <p className="notFound__error">404</p>
        <p className="notFound__error-text">Страница не найдена</p>
      </div>
      <button className="notFound__back">
        Назад
      </button>
    </div>
  )
}