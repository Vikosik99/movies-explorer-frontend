import "./Footer.css"
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__project">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__text">
          <p className="footer_year">&copy; 2023</p>
          <div className="footer__linlks">
            <Link className="footer__link" target="_blank" to="https://practicum.yandex.ru">Яндекс.Практикум</Link>
            <Link className="footer__link" target="_blank" to="https://github.com/Vikosik99">Github</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}