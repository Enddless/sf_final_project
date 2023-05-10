import css from './App.module.css'

import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

// import user from './user-config'
import { BrowserRouter } from 'react-router-dom'
import  { useState, useEffect} from 'react'

function App() {
  

  const [isLogged, setIsLogged] = useState(false);

  //беру из ЛС данные токена либо создаю пустой массив
  const initToken = JSON.parse(window.localStorage.getItem('accesstoken')) 
  const initExpire = JSON.parse(window.localStorage.getItem('expire')) 
  const [newToken, setToken] = useState(initToken); 
  const [newExpire, setExpire] = useState(initExpire); 

  useEffect( () => {
    if (initToken && initExpire) {  
      const currentDate = new Date();
      const date = new Date(newExpire);
      console.log("Текущая дата =" + currentDate.getTime())
      console.log("Срок действия токена =" + date.getTime())
      if ((currentDate.getTime() - date.getTime()) <= 0) {
        console.log("Токен еще действует, логинюсь")
        setIsLogged (true)
        setToken(newToken) // !=null
        setExpire(newExpire) // !=null 
      } 
    } else {
      console.log("Нужно авторизоваться")
    }
  }, [initToken, initExpire])

  return (
    <BrowserRouter>
      <div className={css.wrapper}>
        <Header 
          isLogged={isLogged}
          initToken={initToken} 
          initExpire={initExpire}
          newToken={newToken}
          setToken={setToken}
          newExpire={newExpire}
        />
        <Main 
          // onTokenChange={handleTokenChange} 
          newToken={newToken} setToken={setToken} 
          newExpire={newExpire} setExpire={setExpire}
          isLogged={isLogged}
        />
        <Footer/>
      </div>
    </BrowserRouter>
    
  )
}

export default App
