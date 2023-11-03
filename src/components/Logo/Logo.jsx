import logoHeader from "../../images/header-logo-standart.svg";
import { Link } from "react-router-dom";
import "./Logo.css"

export function Logo() {
  return (
    <Link to="/" className="logo" >
      <img
        className="logo__img"
        src={logoHeader}
        alt="логотип"
      />
    </Link>
  )
}