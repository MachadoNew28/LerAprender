import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Inicio from './Components/Home/index'
 import Header from './Components/Header/index'
  const Routes=()=>(
    <BrowserRouter>
    <Route  component={Header}/>
  
      <Switch>
          <Route path="/" exact component={Inicio}/>
      </Switch>
    </BrowserRouter>
 );
 export default Routes;