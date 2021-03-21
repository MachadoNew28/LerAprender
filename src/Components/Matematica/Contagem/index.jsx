import React from 'react'
import Header from '../../Header/header'
import {Div1,Opacidade} from '../../Inicio/styled';
import {A} from '../../Portugues/Alfabeto/styled'
import ArrayNumeros from './numeros'
import { H1 } from '../../Portugues/styled'
import { Div } from '../../Inicio/styled'

const Contagem = () => {

  return(
   <Opacidade>   
     <Div className="div-top-theme">
        <H1 id="theme-top" >Contagem</H1>
     </Div>
     <Div1 className = "ConteinerLetters">
        {
            ArrayNumeros.map((item,index) => 
              <A 
                 style = {{color:item.color}}
                 id = {item.id} 
                 key = {index} 
                 onClick = {item.action}> {index}
              </A>
            )
        }   
     </Div1>
   </Opacidade>
);
}
 
export default Contagem;