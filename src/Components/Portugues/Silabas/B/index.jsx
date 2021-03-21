import React from 'react'
import Header from '../../../Header/header'
import {Div1,Opacidade,Div} from '../../../Inicio/styled';
import {A} from  '../../Alfabeto/styled'
import ArrayLetras from  '../../Alfabeto/letras'
import { H1 } from '../../../Portugues/styled'
import Silabas from '../styled'


const Vogais =ArrayLetras.filter(letra=>letra.letter==='A' || letra.letter==='E' ||letra.letter==='I'|| letra.letter==='O' || letra.letter==='U')
const Consoantes=ArrayLetras.filter(item =>!Vogais.includes(item) && item.letter != 'Q')
const silaba =Consoantes.map( item => item + Vogais.map(item2=> item2) ) ;
const FormacaoB =Consoantes.filter(item=> item == 'B' + Vogais.map(item1=> item))

console.log(FormacaoB)
 
const B = () => {
  return(
  <>
   <Opacidade>   
        {/*<H1> <H1>Tema:Alfabeto</H1></H1>*/}
        <Div className="div-top-theme">
         <H1 id="theme-top">Sílabas com B</H1>
       </Div>
        <Div1 className = "ConteinerLetters">
          {
            FormacaoB.map((item,index) =>
        
              <Silabas 
                 style = {{color:item.color}}
                 id = {item.id} 
                 key = {index} 
                 onClick = {item.action}> {item}
              </Silabas>

            )}   
        </Div1>
    </Opacidade>
  </>
);
}
 
export default B;