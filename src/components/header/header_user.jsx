import css from '../header/header.module.css'
import avatar from './avatar__user.png'
import { Link } from 'react-router-dom'
import  { useEffect, useState} from 'react'
import axios from "axios"

const HeaderUser = (props) => {
    const {initToken, isLogged} = props
 
    // console.log("initToken in header_user" + initToken)
    //проверяем пользователя, если зареган, то показываем полные данные
    const [usedCompanyCount, setUsedCompanyCount] = useState(0);
    const [companyLimit, setCompanyLimit] = useState(0);
    // useEffect( () => {
    //     axios({
    //         method: 'get',
    //         credentials: true,
    //         url: "https://gateway.scan-interfax.ru/api/v1/account/info",
    //         // data: {
    //         //   login: username,
    //         //   password: userpassword
    //         // },
    //         responseType: "json",
    //         headers: {
    //               'Accept': 'application/json',
    //               'Content-Type': 'application/json',
    //               'Authorization': `Bearer ${initToken}` 
                 
    //         } 
    //     }).then(response => {
    //         const rezult = response.data.eventFiltersInfo
    //         // console.log("rezult =" ,response.data)
    //         // return rezult
    //         setUsedCompanyCount(rezult.usedCompanyCount)
    //         setCompanyLimit(rezult.companyLimit)
    //         // console.log(rezult.eventFiltersInfo.usedCompanyCount)
    //       })
    //       .catch(error => {
    //             console.log('Ошибка:', error.response);
    //       });
    // }, [initToken]);

    return (
        <>
            {isLogged ? (
                <>
                    <div className={css.counter}>
                        <p className={css.counter__title}>Использовано компаний 
                            <span className={css.usedCompanyCount}>{usedCompanyCount}</span>
                        </p>
                        <p className={css.counter__title}>Лимит по компаниям 
                            <span className={css.companyLimit}>{companyLimit}</span>
                        </p>
                    </div>
                    <div className={css.user}>
                        <div className={css.user__info}>
                        <p className={css.user__name}>Алексей А.</p>
                        <p className={css.user__status}>Выйти</p>
                        </div>
                        <div className={css.box__user}>
                        <img src={avatar} alt="Аватар пользователя"></img>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={css.isLoggedBlock}>
                        <Link to='/autorization'>
                            <button className={css.transparent}>Зарегистрироваться</button>
                        </Link>
                        <Link to='/autorization'>
                            <button className={css.btnUser}>Войти</button>
                        </Link>
                        
                    </div>
                </>
            )
            }  
        </>
     )
}

export default HeaderUser