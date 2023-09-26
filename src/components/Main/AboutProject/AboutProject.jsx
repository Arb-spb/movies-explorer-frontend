import './AboutProject.css';

function AboutProject() {
  return (
    <section className="AboutProject">
      <div className="AboutProject__container">
        <h3 className="AboutProject__title">О проекте</h3>
        <div className="AboutProject__content">
          <div>
            <h3 className="AboutProject__stage">Дипломный проект включал 5&nbsp;этапов</h3>
            <p className="AboutProject__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
          </div>
          <div>
            <h3 className="AboutProject__stage">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
            <p className="AboutProject__description">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="AboutProject__tabs">
          <p className="AboutProject__description AboutProject__description_tab AboutProject__description_tab-green">1&nbsp;неделя</p>
          <p className="AboutProject__description AboutProject__description_tab AboutProject__description_tab-gray">4&nbsp;недели</p>
        </div>
        <div className="AboutProject__tabs">
          <p className="AboutProject__description AboutProject__description_tab">Back-end</p>
          <p className="AboutProject__description AboutProject__description_tab">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
