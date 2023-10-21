import logoHeader from "../../images/header-logo-standart.svg";
import { useNavigate } from "react-router-dom";
import "./Logo.css"

export function Logo() {
  const navigate = useNavigate();
  return (
    <button className="logo" onClick={() => navigate("/")}>
      <img
        className="logo__img"
        src={logoHeader}
        alt="логотип"
      />
    </button>
  )
}