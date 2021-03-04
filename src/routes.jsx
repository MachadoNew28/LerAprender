import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Inicio from './Components/Inicio/index'
import Portugues from './Components/Portugues/index'
import Alfabeto from './Components/Portugues/Alfabeto/index'
import Vogal from './Components/Portugues/Vogal';
import Consoante from './Components/Portugues/Consoante';
import Silabas from './Components/Portugues/Silabas';
import Matematica from './Components/Matematica'
import EVP from './Components/EVP'
import HeadeR from './Components/Header/header'

  const Routes=()=>(
    <BrowserRouter>
    <Route  component={HeadeR}/>
      <Switch>
          <Route path="/" exact component={Inicio}/>
          <Route path="/Lingua_Portuguesa" component={Portugues}/>
          <Route path="/Alfabeto"  component={Alfabeto}/>
          <Route path="/Vogal"  component={Vogal}/>
          <Route path="/Consoante"  component={Consoante}/>
          <Route path="/Silaba"  component={Silabas}/>
          <Route path="/Matematica" component={Matematica}/>
          <Route path="/EducaçãoManual_Plastica" component={EVP}/>
      </Switch>
    </BrowserRouter>
 );
 export default Routes;