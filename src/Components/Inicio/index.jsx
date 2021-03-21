import React from 'react'
import {Opacidade,Div1} from './styled'
import MenuPrincipal from './menu'
import { H1 } from '../Portugues/Alfabeto/styled'
import { Div } from './styled'

const Inicio=()=>{
  return(
  <> 
    <Opacidade>
       <Div className="div-top-theme">
         <H1 id="theme-top">Menu Inicial</H1>
       </Div>
        <Div1 > <MenuPrincipal/> </Div1>
    </Opacidade> 
 </>
);
}
export default Inicio;