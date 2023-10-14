import "./AboutProject.css"

export function AboutProject() {
  return (
    <div className="aboutProject">
      <h3 className="aboutProject__glava">О проекте</h3>
      <div className="aboutProject__text">
        <h3 className="aboutProject__text__diplon">Дипломный проект включал 5 этапов</h3>
        <h3 className="aboutProject__text__diplon aboutProject__text__diplon_2">На выполнение диплома ушло 5 недель</h3>
        <p className="aboutProject__text__about">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="aboutProject__text__about aboutProject__text__about_2">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="aboutProject__shkala">
        <div className="aboutProject__conteiner">
          <p className="aboutProject__shkala__block">1 неделя</p>
          <p className="aboutProject__shkala__block aboutProject__shkala__block_ac">4 недели</p>
        </div>
        <div className="aboutProject__conteiner">
          <p className="aboutProject__shkala__text">Back-end</p>
          <p className="aboutProject__shkala__text aboutProject__shkala__text_ac">Front-end</p>
        </div>
      </div>
    </div>
  )
}