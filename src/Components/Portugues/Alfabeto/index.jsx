import React from 'react'
import Header from '../../Header/header'
import {Div1,Opacidade} from '../../Inicio/styled';
import {A} from './styled'
import ArrayLetras from './letras'
import { H1 } from '../../Portugues/styled'
import { Div } from '../../Inicio/styled'
const Alfabeto = () => {
  return(
  <>
   <Opacidade>   
        {/*<H1> <H1>Tema:Alfabeto</H1></H1>*/}
        <Div className="div-top-theme">
         <H1 id="theme-top">Alfabeto Português</H1>
       </Div>
        <Div1 className = "ConteinerLetters">
          {
            ArrayLetras.map((item,index) => 
              <A 
                 style = {{color:item.color}}
                 id = {item.id} 
                 key = {index} 
                 onClick = {item.action}> {item.letter}
              </A>
              )
          }   
        </Div1>
    </Opacidade>
  </>
);
}
 
export default Alfabeto;