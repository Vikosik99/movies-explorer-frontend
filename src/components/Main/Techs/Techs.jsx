import "./Techs.css"

export function Techs() {
  return (
    <div className="Techs">
      <h3 className="Techs__glava">Технологии</h3>
      <div className="Techs__sod">
        <h2 className="Techs__zagalovok">7 технологий</h2>
        <p className="Techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="Techs__programs">
          <p className="Techs__program">HTML</p>
          <p className="Techs__program">CSS</p>
          <p className="Techs__program">JS</p>
          <p className="Techs__program">React</p>
          <p className="Techs__program">Git</p>
          <p className="Techs__program">Express.js</p>
          <p className="Techs__program">mongoDB</p>
        </div>
      </div>
    </div>
  )
}