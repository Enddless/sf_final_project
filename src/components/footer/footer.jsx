
import logo from '../footer/logo__footer.png'
import css from './footer.module.css';

const Footer = (props) => {
  
  return (
    <div className={css.footer}>
      <div className={css.logo}>
        <img src={logo} alt="Логотип СКАН"/>
      </div>
      <div className={css.footer__navigation}>
        <ul className={css.navigation}>
          <li className={css.footer__item}>г. Москва, Цветной б-р,40</li>
          <li className={css.footer__item}>+7 495 771 21 11</li>
          <li className={css.footer__item}>info@skan.ru</li>
          <li></li>
          <li className={css.footer__item}>Copyright. 2022</li>
        </ul>
      </div>
  </div>
  );
}

export default Footer
