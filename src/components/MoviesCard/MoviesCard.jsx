import "./MoviesCard.css"
import menIcon from "../../images/film-33SlovaO.png"

export function MoviesCard() {
  return (
    <div>
      <article className="element">
        {/* <button type="button" className='element__delete' /> */}
        <img
          src={menIcon}
          alt="картинка"
          className="element__img"
        />
        <div className="element__mesto">
          <h2 className="element__text">33 слова о дизайне</h2>
          <button className="element__like" type="button" />
        </div>
        <p className="element__like-text">1ч42м</p>
      </article>
    </div>
  )
}