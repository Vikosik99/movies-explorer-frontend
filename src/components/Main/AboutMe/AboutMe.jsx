import "./AboutMe.css"
import menIcon from "../../../images/aboutme-foto.jpg"
import { Link } from "react-router-dom";

export function AboutMe() {
  return (
    <div className="AboutMe">
      <h2 className="AboutMe__glava">Студент</h2>
      <div className="AboutMe__about">
        <div className="AboutMe__text">
          <h2 className="AboutMe__name">Виктория</h2>
          <p className="AboutMe__job">Фронтенд-разработчик, 30 лет</p>
          <p className="AboutMe__textMe">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link to="https://github.com/Vikosik99" target="_blank" className="AboutMe__git">Github</Link>
        </div>
        <img
          className="AboutMe__img"
          src={menIcon}
          alt="иконка человека"
        />
      </div>
      {/* <h2 className="AboutMe__portfolio">Портфолио</h2>
      <ul className="AboutMe__links">
        <li className="AboutMe__link">
          <p className="AboutMe__link_1">Статичный сайт</p>
          <p className="AboutMe__link_2">&#129133;</p>
        </li>
        <li className="AboutMe__link">
          <p className="AboutMe__link_1">Адаптивный сайт</p>
          <p className="AboutMe__link_2">&#129133;</p>
        </li>
        <li className="AboutMe__link AboutMe__link_end">
          <p className="AboutMe__link_1">Одностраничное приложение</p>
          <p className="AboutMe__link_2">&#129133;</p>
        </li>
      </ul> */}
    </div>
  )
}