import main__logo from '../home_page/main__header__logo.png'
// import SwiperComponent from '../swiper/swiper'
import SliderComponent from '../slider/slider'
import Rates from '../rates/rates'
// import Search from '../search/search'
// import AutorizationPage from '../authorization/authorization'
// import Rezult from '../rezult/rezult'
import css from '../home_page/homePage.module.css'
import { Link } from 'react-router-dom'


const HomePage = (props) => {
  const {isLogged} = props
  return (
        <>
        {/* блок main__header */}
          <div className={css.main__header}>
            <div className={css.main__header__block}>
              <h1 className={css.main__header__title}>Сервис по поиску публикаций о компании 
                по его ИНН
              </h1>
              <p className={css.main__header__subtitle}>Комплексный анализ публикаций, получение 
                данных в формате PDF на электронную почту.
              </p>

              {isLogged ? (
                <Link to="/search">
                  <button>Запросить данные</button>
                </Link>
              ) : (
                <Link to="/autorization">
                  <button>Запросить данные</button>
                </Link>
              )}
              
            </div>
            <div className={css.main__header__img}>
              <img src={main__logo} alt="Картинка менеджера"></img>
            </div>
          </div>
        {/* блок преимущества */}
        {/* <SwiperComponent/> */}
        <SliderComponent/>
         {/* блок тарифы */}
        <Rates/>


        {/* <AutorizationPage/>
        <Search/>
        <Rezult/> */}
        </>
  );
}

export default HomePage;
