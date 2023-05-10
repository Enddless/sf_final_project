import logo from './logo.png';
import logo1 from './logo_1.png';

// import avatar from './avatar__user.png'
import css from './header.module.css'
import { useState } from 'react'
import HeaderUser from './header_user'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const {isLogged} = props
  const [isBurgerVisible, setBurgerVisible] = useState(false)

  const showBurger = ()=> {
    setBurgerVisible(!isBurgerVisible)
  }

  return (
    <div className={css.header}>
      <div className={css.logo}>
        <img src={logo} alt="Логотип СКАН"/>
      </div>
      <div className={css.header__navigation}>
        <ul className={css.navigation}>
          <li>
            <Link to="/" className={css.navigation__item}>Главная </Link> 
          </li>
          <li>
            <Link to="/" className={css.navigation__item}>Тарифы</Link> 
          </li>
          <li>
            <Link to="/" className={css.navigation__item}>FAQ</Link> 
          </li>
        </ul>
      </div>
      
      {<HeaderUser isLogged={isLogged}/>}

      <div className={css.burger} onClick={showBurger}>
            <div className={css.burger_line}></div>
            <div className={css.burger_line}></div>
            <div className={css.burger_line}></div>
      </div>


      {isBurgerVisible && (
        <div className={css.burger__menu} setBurgerVisible={setBurgerVisible}>
          <div className={`${css.logo} ${css.logo1}`}>
            <img src={logo1} alt="Логотип СКАН"/>
          </div>
          <ul>
            <li className={css.navigation__item}>Главная</li>
            <li className={css.navigation__item}>Тарифы</li>
            <li className={css.navigation__item}>FAQ</li>
            {!isLogged && (
              <>
                <li className={css.navigation__item}>Зарегистрироваться</li>
                <li className={css.navigation__item}>
                  <button className={css.btn_enter}>Войти</button>
                </li>
              </>
            )}
            
          </ul> 
        </div>
      )}
      
    </div>
  );
}

export default Header
