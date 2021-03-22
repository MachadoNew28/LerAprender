import React from 'react'
import {Opacidade,Div1} from './styled'
import MenuPrincipal from './menu'
import { H1 } from '../Portugues/Alfabeto/styled'
import { Div } from './styled'
import fundo from './Audio/sound1.m4a'

function Play(){
  const audio = new Audio(fundo)
  audio.play()
}

const Inicio=()=>{
  return(
  <> 
    <Opacidade onClick={Play()}>
       <Div className="div-top-theme">
         <H1 id="theme-top">Menu Inicial</H1>
       </Div>
        <Div1 > <MenuPrincipal/> </Div1>
    </Opacidade> 
 </>
);
}
export default Inicio;