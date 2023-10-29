import "./Portfolio.css"
import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__heading">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__links">
            <Link to="https://github.com/Vikosik99/first-project" className="portfolio__link" target="_blank">
              <p className="portfolio__link-text">Статичный сайт</p>
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
          <li className="portfolio__links">
            <Link to="https://vikosik99.github.io/russian-travel/" className="portfolio__link" target="_blank">
              <p className="portfolio__link-text">Адаптивный сайт</p>
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
          <li className="portfolio__links">
            <Link
              to="https://github.com/Vikosik99/react-mesto-api-full-gha"
              className="portfolio__link portfolio__link_end"
              target="_blank"
            >
              <p className="portfolio__link-text">Одностраничное приложение</p>
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}