import React from 'react'
import Header from '../../Header/header'
import Estilo,{Menu,Div1Conteiner,Opacidade,Div1,H1,Li,ListMenu,A,E,I,O,U} from '../Alfabeto/styled'
import   { useState, useEffect } from 'react'
import SoundA from './Audio/a.m4a';
import SoundB from './Audio/b.m4a';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function PlayA(){
  const audio=new Audio(SoundA);
  setInterval(audio.play(),4000)
}
function PlayB(){
  const audio=new Audio(SoundB);
  setInterval(audio.play(),4000)
}
function Hover(){
  const audio=new Audio(SoundB);
   audio.play();
}

 


const Vogal=()=>{
  
  
   
   
  
  return(
  
  <>
   
    <Estilo>
    <Header></Header>
      <Opacidade>
        <Menu>
          <ListMenu>

            <Link num="1" to="/"><Li>Língua Portuguesa</Li></Link>
            <Li>Matemática</Li>
            <Li>Educação Manual e Plastica</Li>
            <Li>Estudo do Meio</Li>
            <Li>Língua Portuguesa</Li>
            <Li>Matemática</Li>
            <Li>Educação Manual e Plastica</Li>
            <Li>Estudo do Meio</Li>
            <Li>Língua Portuguesa</Li>
            <Li>Matemática</Li>
            <Li>Educação Manual e Plastica</Li>
            <Li>Estudo do Meio</Li>

          </ListMenu>
        </Menu>
        <Div1Conteiner>
          {/*<H1> <H1>Tema:Alfabeto</H1></H1>*/}
          <Div1>
            <A onMouseOver={PlayA} id="Letras">A</A>
            <E id="Letras">E</E>
            <I id="Letras">I</I>
            <O id="Letras">O</O>
            <U id="Letras">U</U>
          </Div1>
        </Div1Conteiner>
      </Opacidade>

    </Estilo>
  </>
);
}
 
export default Vogal;