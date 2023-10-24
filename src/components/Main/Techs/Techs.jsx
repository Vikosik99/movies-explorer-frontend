import "./Techs.css"

export function Techs() {
  return (
    <section className="Techs">
      <div className="Techs__container">
        <h3 className="Techs__glava">Технологии</h3>
        <div className="Techs__sod">
          <h2 className="Techs__zagalovok">7 технологий</h2>
          <p className="Techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="Techs__programs">
            <li className="Techs__program">HTML</li>
            <li className="Techs__program">CSS</li>
            <li className="Techs__program">JS</li>
            <li className="Techs__program">React</li>
            <li className="Techs__program">Git</li>
            <li className="Techs__program">Express.js</li>
            <li className="Techs__program">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  )
}