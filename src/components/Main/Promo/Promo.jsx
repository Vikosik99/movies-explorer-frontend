import "./Promo.css"
import logoHeader from "../../../images/main-landing-logo.svg"


export function Promo() {
  return (
    <div className="promo">
      <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
      <img
        className="promo__img"
        src={logoHeader}
        alt="логотип"
      />
    </div>
  )
}