import "./Portfolio.css"

export function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="AboutMe__portfolio">Портфолио</h2>
        <ul className="AboutMe__links">
          <li className="AboutMe__cont">
            <a
              href="f"
              className="AboutMe__link"
            >
              <p className="AboutMe__link_1">Статичный сайт</p>
              <p className="AboutMe__link_2">&#129133;</p>
            </a>
          </li>
          <li className="AboutMe__cont">
            <a
              href="h"
              className="AboutMe__link"
            >
              <p className="AboutMe__link_1">Адаптивный сайт</p>
              <p className="AboutMe__link_2">&#129133;</p>
            </a>
          </li>
          <li className="AboutMe__cont">
            <a
              href="h"
              className="AboutMe__link"
            >
              <p className="AboutMe__link_1">Одностраничное приложение</p>
              <p className="AboutMe__link_2">&#129133;</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}