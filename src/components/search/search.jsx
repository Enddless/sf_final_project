import css from '../search/search.module.css'
import list from '../search/list.png'
import folder from '../search/folders.png'
import window from '../search/window.png'
// import arrow from '../search/arrowBottom.png'

import  { useState} from 'react'
import { instance } from '../../utils/axios'

const Search = (props) => {
  const {initToken} = props
//   console.log("Текущий токен в поиске =" + initToken)

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [inn, setInn] = useState('')
  const [tonality, setTonality] = useState("Любая")
  const [quantity, setQuantity] = useState('')

  const [maxFullness, setCheckboxOne] = useState(true)
  const [inBusinessNews, setCheckboxTwo] = useState(true)
  const [onlyMainRole, setCheckboxThree] = useState(true)
  const [onlyWithRiskFactor, setCheckboxFour] = useState(false)
  const [excludeTechNews, setCheckboxFive] = useState(false)
  const [excludeAnnouncements, setCheckboxSix] = useState(true)
  const [excludeDigests, setCheckboxSeven] = useState(false)
  
  const url = "v1/objectsearch/histograms"

  

  const searchResponse  = (event) => {
    event.preventDefault()
    instance({
        method: 'post',
        url: url,
        data: {
            "issueDateInterval":{
                "startDate": startDate,
                "endDate": endDate
            },
            "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                        {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": inn, //инн
                        "maxFullness": maxFullness, //максимальная полнота
                        "inBusinessNews": inBusinessNews //упоминание в бизнес-контексте
                        }
                    ],
                    "onlyMainRole": onlyMainRole, //главная роль в публикации
                    "tonality": tonality,
                    "onlyWithRiskFactors": onlyWithRiskFactor, //только риск-факторы
                    "riskFactors": { //риск-факторы
                        "and": [],
                        "or": [],
                        "not": []
                    },
                    "themes": {
                        "and": [],
                        "or": [],
                        "not": []
                    }
                },
                "themesFilter": {
                    "and": [],
                    "or": [],
                    "not": []
                }
            },
            "attributeFilters": { // это чекбоксы исключения
                "excludeTechNews": excludeTechNews,
                "excludeAnnouncements": excludeAnnouncements,
                "excludeDigests": excludeDigests
            },
            "similarMode": "duplicates", //Фильтр похожих публикаций
            "limit": quantity,
            "sortType": "sourceInfluence", //тип сортировки по всем источникам
            "sortDirectionType": "asc",
            "intervalType": "month",
            "histogramTypes": [
                "totalDocuments",
                "riskFactors"
            ]   
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${initToken}`   
        } 
    }).then(response => {
      const rezult = response.data
      console.log("Данные по общей сводке = " + rezult)
    //   navigate('/rezult'); // автоматический переход на роутер
    })
    .catch(error => {
          console.log('Ошибка выгрузки сводки', error.response);
    });
  }

  return (
    <div className={css.search}>
        <div className={css.info}>
            <h1 className={css.title}> Найдите необходимые данные в пару кликов.</h1>
            <p>Задайте параметры поиска. <br></br>
            Чем больше заполните, тем точнее поиск</p>
        
            <form className={css.searchForm} onSubmit={searchResponse}>
                <div className={css.flexboxSearch}>
                    <div className={css.blockLeft}>
                        <label htmlFor="inn">ИНН компании <sup>*</sup></label>
                        <input 
                            type="text" 
                            id="inn" 
                            name="inn" 
                            placeholder='10 цифр' 
                            value={inn}
                            onChange={(event) => setInn (event.target.value)}></input>

                        <label htmlFor="ton">Тональность <sup>*</sup></label>
                            <select 
                                id="tonality" 
                                value={tonality}
                                onChange={(event) => setTonality (event.target.value)}
                            >
                                <option value="Позитивная">Позитивная</option>
                                <option value="Негативная">Негативная</option>
                                <option value="Любая">Любая</option>
                            </select>
                        
                        <label htmlFor="numberDocument">Количество документов в выдаче <sup>*</sup></label>
                            <input 
                                type="number" 
                                id="numberDocument" 
                                name="numberDocument" 
                                placeholder='От 1 до 1000'
                                value={quantity}
                                onChange={(event) => setQuantity (event.target.value)}></input>

                        <label htmlFor="date">Диапазон поиска <sup>*</sup></label>
                            <div className={css.dateInput}>
                                <input required  
                                    type="date" 
                                    id="startDate" 
                                    name="data" 
                                    placeholder='Дата начала' 
                                    value={startDate}
                                    onChange={(event) => setStartDate (event.target.value)}></input>
                                <input required
                                    type="date" 
                                    id="endDate"   
                                    name="data" 
                                    value={endDate}
                                    onChange={(event) => setEndDate (event.target.value)}
                                    placeholder='Дата конца'></input>
                            </div>
                            
                    </div>
                    <div className={css.blockRight}>
                        <label htmlFor="checked1" className={css.signs}>
                            <input defaultChecked
                                type="checkbox" 
                                id="checked1" 
                                className={css.checkbox}  
                                onClick={ () => setCheckboxOne(!maxFullness)}
                                value={maxFullness}></input> 
                                    <span className={css.fake}></span>   
                                    <span className={maxFullness ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                        Признак максимальной полноты</span>         
                        </label>

                        <label htmlFor="checked2" className={css.signs}>
                            <input defaultChecked
                                type="checkbox" 
                                id="checked2" 
                                className={css.checkbox} 
                                onClick={ () => setCheckboxTwo(!inBusinessNews)}
                                value={inBusinessNews}></input> 
                                    <span className={css.fake}></span>
                                    <span className={inBusinessNews ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                    Упоминания в бизнес-контексте</span>         
                        </label>

                        <label htmlFor="checked3" className={css.signs}>
                            <input defaultChecked
                                type="checkbox" 
                                id="checked3" 
                                className={css.checkbox} 
                                value={onlyMainRole}
                                onClick={ () => setCheckboxThree(!onlyMainRole)}></input> 
                                    <span className={css.fake}></span>
                                    <span className={onlyMainRole ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                    Главная роль в публикации</span>         
                        </label>
                        
                        <label htmlFor="checked4" className={css.signs}>
                            <input 
                                type="checkbox" 
                                id="checked4" 
                                className={css.checkbox} 
                                value={onlyWithRiskFactor}
                                onClick={ () => setCheckboxFour(!onlyWithRiskFactor)}></input> 
                                    <span className={css.fake}></span>
                                    <span className={onlyWithRiskFactor ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                    Публикации только с риск-факторами</span>         
                        </label>

                        <label htmlFor="checked5" className={css.signs}>
                            <input 
                                type="checkbox" 
                                id="checked5" 
                                className={css.checkbox} 
                                value={excludeTechNews}
                                onClick={ () => setCheckboxFive(!excludeTechNews)}></input>  
                                    <span className={css.fake}></span>
                                    <span className={excludeTechNews ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                    Включать технические новости рынков</span>         
                        </label>

                        <label htmlFor="checked6" className={css.signs}>
                            <input defaultChecked
                                type="checkbox" 
                                id="checked6" 
                                className={css.checkbox}
                                value={excludeAnnouncements} 
                                onClick={ () => setCheckboxSix(!excludeAnnouncements)}></input> 
                                    <span className={css.fake}></span>
                                    <span className={excludeAnnouncements ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>Включать анонсы и календари</span>         
                        </label>

                        <label htmlFor="checked7" className={css.signs}>
                            <input 
                                type="checkbox" 
                                id="checked7" 
                                className={css.checkbox} 
                                value={excludeDigests}
                                onClick={ () => setCheckboxSeven(!excludeDigests)}></input>  
                                    <span className={css.fake}></span>
                                    <span className={excludeDigests ? `${css.agree} ${css.checkboxActive}`  : `css.agree`}>
                                    Включать сводки новостей</span>         
                        </label>
                    </div>
                </div>
                    <button className={css.btn__inactive}>Поиск</button>
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
