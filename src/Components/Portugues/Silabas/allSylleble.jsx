import React, { useState }  from 'react'

import Header from '../../Header/header'
import {Div1,Opacidade,Div} from '../../Inicio/styled';
import {A} from  '../Alfabeto/styled'
import ArrayLetras from  '../Alfabeto/letras'
import arraySilabasSounds from './arraySoundsSyllable'
import { H1 } from '../styled'
import Silabas from './styled'


const Vogais =ArrayLetras.filter(letra=>letra.letter==='A' || letra.letter==='E' ||letra.letter==='I'|| letra.letter==='O' || letra.letter==='U')
const Consoantes=ArrayLetras.filter(item =>!Vogais.includes(item) && item.letter != 'Q')
 
function AllSylleble () {

   const [sylleblePosition,setSylleblePosition] = useState('1')
   
 
   function SelectingSoundOfPerSylleble () {
     const audio = new Audio(arraySilabasSounds[sylleblePosition])
     audio.play()
     console.log(sylleblePosition)
   }

  return(
  <>
   <Opacidade>   
        {/*<H1> <H1>Tema:Alfabeto</H1></H1>*/}
        <Div className="div-top-theme">
         <H1 id="theme-top">Sílabas (monosílaba)</H1>
       </Div>
        <Div1 className = "ConteinerLetters">
          {
            Consoantes.map((item,index) =>
            
                Vogais.map((item2,index2) => 
                
                <>
                <Silabas
                 className= "SilabasStyle"
                 style = {{color:item.color}}
                 id = {item.id} 
                 key = {index} 
                 onClick = {item.action}> {item.letter}
               </Silabas>
               +
               <Silabas 
                 style = {{color:item2.color}}
                 id = {item2.id} 
                 key = {index2} 
                 onClick = {item2.action}> {item2.letter}
              </Silabas>
              =
              <Silabas 
                 style = {{color:item2.color}}
                 id = {item2.id} 
                 key = {index2} 
                 onClick = { setSylleblePosition}> {item.letter+item2.letter}
              </Silabas>
              </>
               )
            )}   
        </Div1>
    </Opacidade>
  </>
);
}
 
export default AllSylleble;