import "./NotFound.css"
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="notFound">
      <div className="notFound__container">
        <div className="notFound__error-container">
          <h1 className="notFound__error">404</h1>
          <p className="notFound__error-text">Страница не найдена</p>
        </div>
        <button type="button" className="notFound__back" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </main>
  )
}