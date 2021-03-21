import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Inicio from './Components/Inicio/index'
import Portugues from './Components/Portugues/index'
import Alfabeto from './Components/Portugues/Alfabeto/index'
import Vogal from './Components/Portugues/Vogal';
import Consoante from './Components/Portugues/Consoante';
import MenuSilabas from './Components/Portugues/Silabas/index';
import Matematica from './Components/Matematica'
import EVP from './Components/EVP'
import HeadeR from './Components/Header/header'
import Login from './Components/login'
import { Div } from './Components/Inicio/styled'
import Contagem from './Components/Matematica/Contagem/index'
import Soma from './Components/Matematica/Soma'
import Silabas from './Components/Portugues/Silabas/allSylleble'
import B from './Components/Portugues/Silabas/B'

  const Routes=()=>(
    <BrowserRouter>
    <Route  component={HeadeR}/>
    <Route  component={Div}/>
      <Switch>
          <Route path="/login"  component={Login}/>
          <Route path="/" exact component={Inicio}/>
          <Route path="/Lingua_Portuguesa" component={Portugues}/>
          <Route path="/Alfabeto"  component={Alfabeto}/>
          <Route path="/Vogal"  component={Vogal}/>
          <Route path="/Consoante"  component={Consoante}/>
          <Route path="/sílabas"  component={MenuSilabas}/>
          <Route path="/monosílabas"  component={Silabas}/>
          <Route path="/Matematica" component={Matematica}/>
          <Route path="/EducaçãoManual_Plastica" component={EVP}/>
          <Route path="/contagem" component={Contagem}/>
          <Route path="/Soma" component={Soma}/>
          <Route path="/B" component={B}/>

      </Switch>
    </BrowserRouter>
 );
 export default Routes;