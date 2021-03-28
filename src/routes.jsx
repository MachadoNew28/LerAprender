import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Inicio from './Components/Home/index'
 import Header from './Components/Header/index'
import Portugues from './Components/Portugues/index';
import Alfabeto from './Components/Portugues/Alfabeto/index'
/*import Vogais from './Components/Portugues/Vogais/index'*/
/*import Consoantes from './Components/Portugues/Consoantes/index'
import Silabas from './Components/Portugues/Alfabeto/index'
/*import Gramatica from './Components/Portugues/Gramática/index'*/
  const Routes=()=>(
    <BrowserRouter>
    <Route  component={Header}/>
      <Switch>
          <Route path="/" exact component={Inicio}/>
          <Route path="/Portugues"component={Portugues}/>
        {/*************Links Para Lígua Portuguesa******************* */}
          <Route path="/Alfabeto"component={Alfabeto}/>
         
         {/*  <Route path="/Vogais" /><Route path="/Consoantes"component={Consoantes}/>}
          <Route path="/Sílabas"component={Silabas}/>
         {/** <Route path="/Gramática"component={Gramatica}/>*/}
        {/*************Links Para Lígua Matemática******************* */}
      </Switch>
    </BrowserRouter>
 );
 export default Routes;