import "./Portfolio.css"
import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="AboutMe__portfolio">Портфолио</h2>
        <ul className="AboutMe__links">
          <li className="AboutMe__cont">
            <Link to="https://github.com/Vikosik99/first-project" className="AboutMe__link" target="_blank">
              <p className="AboutMe__link_1">Статичный сайт</p>
              <p className="AboutMe__link_2">↗</p>
            </Link>
          </li>
          <li className="AboutMe__cont">
            <Link to="https://vikosik99.github.io/russian-travel/" className="AboutMe__link" target="_blank">
              <p className="AboutMe__link_1">Адаптивный сайт</p>
              <p className="AboutMe__link_2">↗</p>
            </Link>
          </li>
          <li className="AboutMe__cont">
            <Link
              to="https://github.com/Vikosik99/react-mesto-api-full-gha"
              className="AboutMe__link"
              target="_blank"
            >
              <p className="AboutMe__link_1">Одностраничное приложение</p>
              <p className="AboutMe__link_2">↗</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}