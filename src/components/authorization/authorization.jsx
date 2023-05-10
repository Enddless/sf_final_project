import css from './authorization.module.css'
import characters from '../authorization/Characters.png'
import lock from '../authorization/Lock.png'
import google from '../authorization/google.png'
import facebook from '../authorization/facebook.png'
import ya from '../authorization/ya.png'
import React from 'react'
import  { useState} from 'react'
import axios from "axios"
import { useNavigate  } from 'react-router-dom'




const AutorizationPage = (props) => {
  const {setToken} = props

  // const [isDisabled, setIsDisabled] = useState(false)
  const [isActiveTabEnter, setIsActiveTabEnter] = useState(true)
  const [isActiveTabReg, setIsActiveTabReg] = useState(false)

  const [username, setUsername] = useState('')
  const [userpassword, setUserpassword] = useState('')
  const navigate = useNavigate();
  const url = "https://gateway.scan-interfax.ru/api/v1/account/login"


  // if (username && userpassword) {
  //   setIsDisabled(!isDisabled)
  // }

  const authResponse  = (event) => {
    event.preventDefault()
    axios({
      method: 'post',
      credentials: true,
      url: url,
      data: {
        login: username,
        password: userpassword
      },
      responseType: "json",
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
               
      } 
    }).then(res => {
      // const rezult = res.data
      // const newToken = rezult.accessToken
      // const newExpire = rezult.expire
      localStorage.setItem('expire', JSON.stringify(res.data.expire)) //expire записался
      localStorage.setItem('accesstoken', JSON.stringify(res.data.accessToken))//token записался
      // setToken(newToken)
      // onTokenChange(newToken, newExpire); // вызываем функцию из родительского компонента и передаем родителю начальные значения
      navigate('/'); // автоматический переход на роутер
    })
    .catch(error => {
          console.log('An error occurred:', error.response);
    });
  }
  
  //переключение активной вкладки в форме авторизации
  const handleActiveTab = () => {
    setIsActiveTabEnter (!isActiveTabEnter)
    setIsActiveTabReg (!isActiveTabReg)
  }

  return (
    <>
      <div className={css.autorization}>
            <div className={css.info}>
              <h1 className={css.title}> Для оформления подписки на тариф, 
                  необходимо авторизоваться.
              </h1>
              <img src={characters} className={css.characters}alt="Characters"></img>
            </div>
            <div className={css.form}>
              <img src={lock} className={css.lock} alt="Lock"></img>
              <form className={css.autorizationForm} onSubmit={authResponse }>
                  <div className={css.tab}>
                      <p 
                        onClick={handleActiveTab} 
                        isActiveTabEnter={isActiveTabEnter}
                        className={`${css.enter} ${isActiveTabEnter ? `${css.activeTab}` : ""}`}
                      >
                        Войти
                      </p>
                      <p 
                        onClick={handleActiveTab} 
                        isActiveTabReg={isActiveTabReg}
                        className={`${css.enter} ${isActiveTabReg ? `${css.activeTab}` :  ""}`}
                      >
                        Зарегистрироваться
                      </p>
                  </div>
                  <label htmlFor="login">Логин или номер телефона:</label>
                  <input 
                      type="text" 
                      id="login" 
                      name="login" 
                      value={username} 
                      onChange={(event) => setUsername (event.target.value)
                        }
                      required>
                  </input>

                  <label htmlFor="password">Пароль:</label>
                  <input 
                      type="password" 
                      id="password" 
                      value={userpassword} 
                      name="password" 
                      onChange={(event) => setUserpassword (event.target.value)}
                      required>
                  </input>
                  <button 
                    // disabled={isDisabled} `${!isDisabled ?
                    disabled={!username || !userpassword}
                    className={css.btn__inactive}
                  > 
                      {isActiveTabReg ? "Зарегистрироваться" : "Войти"}
                  </button>

                  {/* если пользователь хочет зарегистрироваться, он не может восстановить пароль */}
                  {!isActiveTabReg && (
                    <>
                      <p className={css.resetPas}>Восстановить пароль</p>
                      <p className={css.subEnter}>Войти через:</p>
                      <div className={css.partners}>
                          <div className={css.icon}><img src={google} alt="icon"></img></div>
                          <div className={css.icon}><img src={facebook} alt="icon"></img></div>
                          <div className={css.icon}><img src={ya} alt="icon"></img></div>
                      </div>
                    </>
                  )}
              </form>
              
            </div>
          </div>
    </>
  );
}

export default AutorizationPage
