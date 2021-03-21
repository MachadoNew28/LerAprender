import React from 'react'
import Header from '../../Header/header'
import {Opacidade,Div1} from '../../Inicio/styled'
import {A} from '../Alfabeto/styled'
import ArrayLetras from './letras'

function Vogal(){
  return(
  <>
    <Opacidade>
          {/*<H1> <H1>Tema:Alfabeto</H1></H1>*/}
          <Div1 className = "ConteinerLetters">
            {
               ArrayLetras.map((item,index) => 
                 <A 
                    style = {{color:item.color}}
                    id = {item.id} 
                    key = {index} 
                    onClick = {item.action}> {item.letter}
                 </A>
              )}   
        </Div1>
    </Opacidade>
 </>
);
}
 
export default Vogal;