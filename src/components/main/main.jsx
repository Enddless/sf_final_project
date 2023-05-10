import HomePage from '../home_page/homePage'

import AutorizationPage from '../authorization/authorization'
import Search from '../search/search'
import Rezult from '../rezult/rezult'
import css from '../main/main.module.css'
import { Routes, Route } from 'react-router-dom'


const Main = (props) => {
  
  return (
    <div className={css.main}>
      <Routes>
          <Route exact path={'/'} element={ <HomePage {...props}/> }/>
          <Route path={'/autorization'} element={ <AutorizationPage {...props}/> }/>
          <Route path={'/search'} element={ <Search {...props}/> }/>
          <Route path={'/rezult'} element={ <Rezult {...props}/> }/>
      </Routes>
    </div>
  );
}

export default Main;
