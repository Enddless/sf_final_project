import css from '../header/header.module.css'
import avatar from './avatar__user.png'
import { Link } from 'react-router-dom'
import axios from "axios"

const HeaderUser = (props) => {
    const {initExpire, initToken, newToken} = props
    // console.log("newToken in header_user = " + newToken)
    //проверяем пользователя, если зареган, то показываем полные данные
    // это верный запрос, выдает объект данных eventFiltersInfo
// : 
// companyLimit
// : 
// 5
// usedCompanyCount
// : 
// 0
    // axios({
    //     method: 'get',
    //     credentials: true,
    //     url: "https://gateway.scan-interfax.ru/api/v1/account/info",
    //     // data: {
    //     //   login: username,
    //     //   password: userpassword
    //     // },
    //     responseType: "json",
    //     headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${localStorage.getItem("token")}` 
    //     } 
    //   }).then(response => {
    //     const rezult = response.data
    //     console.log("rezult =" ,response.data)
    //     return rezult
    //   })
    //   .catch(error => {
    //         console.log('An error occurred:', error.response);
    //   });




    const {isLogged} = props
    return (
        <>
            {isLogged ? (
                <>
                    <div className={css.counter}>
                        <p className={css.counter__title}>Использовано компаний </p>
                        <p className={css.counter__title}>Лимит по компаниям</p>
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