import "./MoviesCard.css"
import { calcDuration } from "../../utils/utils";
import { useLocation } from "react-router-dom";

export function MoviesCard({movie, onDelete, onLike, onDislike}) {
  const location = useLocation();

  function handleDelete() {
    // onDelete(movie);
  }

  function handleLike() {
    // onLike(movie);
  }

  function handleDislike() {
    // onDislike(movie);
  }

  function getButton() {
    if (location.pathname === "/saved-movies") {
      return <button type="button" className="element__like element__like_type_delete" onClick={handleDelete}/>
    } else if (movie.saved) {
      return <button className="element__like element__like_type_like" type="button" onClick={handleDislike}/>
    } else {
      return <button className="element__like element__like_type_dislike" type="button" onClick={handleLike}/>
    }
  }

  return (
      <li className="element">
        <img
          src={movie.image}
          alt="фильм"
          className="element__img"
        />
        <div className="element__container">
          <h2 className="element__text">{movie.nameRU}</h2>
          {getButton()}
        </div>
        <p className="element__like-text">{calcDuration(movie.duration)}</p>
      </li>
  )
}