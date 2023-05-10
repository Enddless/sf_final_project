import css from './rezult.module.css'
import apple from './apple.png'
import rezultImage from './rezult1.png'

const Rezult = (props) => {
  
  return (
    <div className={css.publications}>
      <div className={css.info}>
          <h1>Ищем. Скоро будут результаты</h1>
          <p>Поиск может занять некоторое время, 
            просим сохранять терпение.
          </p>
          <img src={apple} alt="apple"></img>
      </div>
      <div className={css.bulletin}>
        <h3>Общая сводка</h3>
        <span>Найдено 4 221 вариантов</span>
        <div className={css.table}>
          <div className={`${css.table__item} ${css.table__head}`}>
            <div className={css.item}>
              <p>Период</p>
              <p>Всего</p>
              <p>Риски</p>
            </div>
          </div>
          <div className={css.table__item}>
            <div className={css.item}>
              <p>10.09.2021</p>
              <p>5</p>
              <p>0</p>
            </div>
          </div>
          <div className={css.table__item}>
            <div className={css.item}>
              <p>11.09.2021</p>
              <p>9</p>
              <p>9</p>
            </div>
          </div>
        </div>
        <h3>Список документов</h3>
        <div className={css.documentation}>
          <div className={css.card}>
            <p className={css.dataPublication}>13.09.2021 <span>Комсомольская правда KP.RU</span></p>
            <p className={css.title}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</p>
            <button className={css.btnNews}>Технические новости</button>
            <img src={rezultImage} alt="rezultImage"></img>
            <p className={css.text}>SkillFactory — школа для всех, кто хочет изменить свою карьеру 
              и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран 
              с 4 континентов, самому взрослому студенту сейчас 86 лет. 
              Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, 
              Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.</p>
            <p className={css.text}>Принципы SkillFactory: акцент на практике, забота о студентах 
              и ориентир на трудоустройство. 80% обучения — выполнение 
              упражнений и реальных проектов. Каждого студента поддерживают менторы, 
              2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить 
              резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
            </p>
            
            <div className={css.wordsCount}>
              <button className={css.source}>Читать в источнике</button>
              <span >2 543 слова</span>
            </div>
          </div>
          <div className={css.card}>
            <p className={css.dataPublication}>13.09.2021 <span>Комсомольская правда KP.RU</span></p>
            <p className={css.title}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</p>
            <button className={css.btnNews}>Технические новости</button>
            <img src={rezultImage} alt="rezultImage"></img>
            <p className={css.text}>SkillFactory — школа для всех, кто хочет изменить свою карьеру 
              и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран 
              с 4 континентов, самому взрослому студенту сейчас 86 лет. 
              Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, 
              Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.</p>
            <p className={css.text}>Принципы SkillFactory: акцент на практике, забота о студентах 
              и ориентир на трудоустройство. 80% обучения — выполнение 
              упражнений и реальных проектов. Каждого студента поддерживают менторы, 
              2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить 
              резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
            </p>
            
            <div className={css.wordsCount}>
              <button className={css.source}>Читать в источнике</button>
              <span >2 543 слова</span>
            </div>
          </div>
          
        </div>
        <button className={css.more}>Показать больше</button>
      </div>
      
        
  </div>
  );
}

export default Rezult
