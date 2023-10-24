import "./AboutProject.css"

export function AboutProject() {
  return (
    <section className="aboutProject">
      <div className="aboutProject__container">
        <h3 className="aboutProject__glava">О проекте</h3>
        <div className="aboutProject__text">
          <h3 className="aboutProject__text-diplon">Дипломный проект включал 5 этапов</h3>
          <h3 className="aboutProject__text-diplon aboutProject__text-diplon_description">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__text-about">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="aboutProject__text-about aboutProject__text-about_description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="aboutProject__shkala">
          <div className="aboutProject__shkala-container">
            <p className="aboutProject__block">1 неделя</p>
            <p className="aboutProject__block aboutProject__block_week">4 недели</p>
          </div>
          <div className="aboutProject__shkala-container">
            <p className="aboutProject__block-text">Back-end</p>
            <p className="aboutProject__block-text aboutProject__block-text_front">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}