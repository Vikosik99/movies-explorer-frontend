import "./MoviesCard.css"
import { calcDuration } from "../../utils/utils";
import { useLocation } from "react-router-dom";
import { MOVIES_API_URL } from "../../utils/constants";
import { useState } from "react";

export function MoviesCard({movie, onLike, onDislike}) {
  const {pathname} = useLocation();
  const imagePath = pathname === "/saved-movies" ? movie.image : `${MOVIES_API_URL}${movie.image.url}`
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  async function handleLike() {
    setIsButtonDisabled(() => true);
    await onLike(movie);
    setIsButtonDisabled(() => false);
  }

  async function handleDislike() {
    setIsButtonDisabled(() => true);
    await onDislike(movie);
    setIsButtonDisabled(() => false);
  }

  function getButton() {
    if (pathname === "/saved-movies") {
      return <button type="button" className="element__like element__like_type_delete" onClick={handleDislike} disabled={isButtonDisabled}/>
    } else if (movie.saved) {
      return <button className="element__like element__like_type_like" type="button" onClick={handleDislike} disabled={isButtonDisabled}/>
    } else {
      return <button className="element__like element__like_type_dislike" type="button" onClick={handleLike} disabled={isButtonDisabled}/>
    }
  }

  return (
      <li className="element">
        <img
          src={imagePath}
          alt="фильм"
          className="element__img"
          onClick={() => window.open(movie.trailerLink, "_blank")}
        />
        <div className="element__container">
          <h2 className="element__text">{movie.nameRU}</h2>
          {getButton()}
        </div>
        <p className="element__like-text">{calcDuration(movie.duration)}</p>
      </li>
  )
}