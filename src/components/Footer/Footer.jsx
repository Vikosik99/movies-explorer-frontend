import "./Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__projecct">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__text">
        <p className="footer_year">&copy; 2023</p>
        <div className="footer__linlks">
          <p className="footer__link">Яндекс.Практикум</p>
          <p className="footer__link">Github</p>
        </div>
      </div>
    </footer>
  )
}