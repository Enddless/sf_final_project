import css from '../search/search.module.css'
import list from '../search/list.png'
import folder from '../search/folders.png'
import window from '../search/window.png'
// import arrow from '../search/arrowBottom.png'
import { Link } from 'react-router-dom'
import  { useState} from 'react'

const Search = (props) => {
  const [checkboxOne, setCheckboxOne] = useState(false)
  const [checkboxTwo, setCheckboxTwo] = useState(false)
  const [checkboxThree, setCheckboxThree] = useState(false)
  const [checkboxFour, setCheckboxFour] = useState(false)
  const [checkboxFive, setCheckboxFive] = useState(false)
  const [checkboxSix, setCheckboxSix] = useState(false)
  const [checkboxSeven, setCheckboxSeven] = useState(false)

  return (
    <div className={css.search}>
        <div className={css.info}>
            <h1 className={css.title}> Найдите необходимые данные в пару кликов.</h1>
            <p>Задайте параметры поиска. <br></br>
            Чем больше заполните, тем точнее поиск</p>
        
            <form className={css.searchForm}>
                <div className={css.flexboxSearch}>
                    <div className={css.blockLeft}>
                        <label htmlFor="inn">ИНН компании <sup>*</sup></label>
                        <input type="text"   id="inn" name="inn" placeholder='10 цифр'></input>

                        <label htmlFor="ton">Тональность <sup>*</sup></label>
                            <select id="ton">
                                <option value="Любая">Позитивная</option>
                                <option value="Value">Негативная</option>
                                <option value="Value" selected>Любая</option>
                            </select>
                        
                        <label htmlFor="password">Количество документов в выдаче <sup>*</sup></label>
                            <input type="password" id="password" name="password" placeholder='От 1 до 1000'></input>

                        <label htmlFor="date">Диапазон поиска <sup>*</sup></label>
                            <div className={css.dateInput}>
                                <input type="date" id="dateStart" required name="data" placeholder='Дата начала' ></input>
                                <input type="date" id="dateEnd" required name="data" placeholder='Дата конца' ></input>
                            </div>
                            
                    </div>
                    <div className={css.blockRight}>
                        <label htmlFor="checked1" className={css.signs}>
                            <input 
                                type="checkbox" 
                                id="checked1" 
                                className={css.checkbox}
                                checkboxOne={checkboxOne} 
                                onClick={ () => setCheckboxOne(!checkboxOne)}></input> 
                                    <span className={css.fake}></span>   
                                    <span className={checkboxOne ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                        Признак максимальной полноты</span>         
                        </label>

                        <label htmlFor="checked2" className={css.signs}>
                            <input 
                                type="checkbox" 
                                id="checked2" 
                                className={css.checkbox} 
                                checkboxTwo={checkboxTwo} 
                                onClick={ () => setCheckboxTwo(!checkboxTwo)}></input> 
                                    <span className={css.fake}></span>
                                    <span className={checkboxTwo ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                    Упоминания в бизнес-контексте</span>         
                        </label>

                        <label htmlFor="checked3" className={css.signs}>
                            <input 
                                type="checkbox" 
                                id="checked3" 
                                className={css.checkbox} 
                                checkboxThree={checkboxThree} 
                                onClick={ () => setCheckboxThree(!checkboxThree)}></input> 
                                    <span className={css.fake}></span>
                                    <span className={checkboxThree ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                    Главная роль в публикации</span>         
                        </label>
                        
                        <label htmlFor="checked4" className={css.signs}>
                            <input 
                                type="checkbox" 
                                id="checked4" 
                                className={css.checkbox} 
                                checkboxFour={checkboxFour} 
                                onClick={ () => setCheckboxFour(!checkboxFour)}></input> 
                                    <span className={css.fake}></span>
                                    <span className={checkboxFour ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                    Публикации только с риск-факторами</span>         
                        </label>

                        <label htmlFor="checked5" className={css.signs}>
                            <input 
                                type="checkbox" 
                                id="checked5" 
                                className={css.checkbox} 
                                checkboxFive={checkboxFive} 
                                onClick={ () => setCheckboxFive(!checkboxFive)}></input>  
                                    <span className={css.fake}></span>
                                    <span className={checkboxFive ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                    Включать технические новости рынков</span>         
                        </label>

                        <label htmlFor="checked6" className={css.signs}>
                            <input 
                                type="checkbox" 
                                id="checked6" 
                                className={css.checkbox} 
                                checkboxSix={checkboxSix} 
                                onClick={ () => setCheckboxSix(!checkboxSix)}></input> 
                                    <span className={css.fake}></span>
                                    <span className={checkboxSix ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>Включать анонсы и календари</span>         
                        </label>

                        <label htmlFor="checked7" className={css.signs}>
                            <input 
                                type="checkbox" 
                                id="checked7" 
                                className={css.checkbox} 
                                checkboxSeven={checkboxSeven} 
                                onClick={ () => setCheckboxSeven(!checkboxSeven)}></input>  
                                    <span className={css.fake}></span>
                                    <span className={checkboxSeven ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                    Включать сводки новостей</span>         
                        </label>
                    </div>
                </div>
                    <Link to="/rezult">
                        <button className={css.btn__inactive}>Поиск</button>
                    </Link>
                    <p className={css.comment}><sup>*</sup> Обязательные к заполнению поля</p>         
            </form>
        </div>
        <div className={css.imageBlock}>
            <img className={css.list} src={list} alt="list"></img>
            <img className={css.folder} src={folder} alt="folder"></img>
            <img className={css.window} src={window} alt="window"></img>
        </div>
  </div>
  );
}

export default Search
