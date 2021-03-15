import React from 'react'
import Header from '../../Header/header'
import {Div1,Opacidade} from '../../Inicio/styled';
import Estilo,{Div1Conteiner,H1,Li,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,X,Z} from './styled'
import   { useState, useEffect } from 'react'
import SoundA from './Audio/a.m4a';
import SoundB from './Audio/b.m4a';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import VoiceAlfa from './Audio/click.m4a'

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

function PlayAlfa(){
  const audio=new Audio(VoiceAlfa);
   audio.play() 
}
 


const Alfabeto=()=>{
  return(
  <>
    <Opacidade>   
        {/*<H1> <H1>Tema:Alfabeto</H1></H1>*/}
        <Div1 className="ConteinerLetters">
            <A onMouseOver={PlayA} id="Letras">A</A>
            <B onMouseOver={PlayB} id="Letras">B</B>
            <C id="Letras">C</C>
            <D id="Letras">D</D>
            <E id="Letras">E</E>
            <F id="Letras">F</F>
            <G id="Letras">G</G>
            <H id="Letras">H</H>
            <I id="Letras">I</I>
            <J id="Letras">J</J>
            <L id="Letras">L</L>
            <M id="Letras">M</M>
            <N id="Letras">N</N>
            <O id="Letras">O</O>
            <P id="Letras">P</P>
            <Q id="Letras">Q</Q>
            <R id="Letras">R</R>
            <S id="Letras">S</S>
            <T id="Letras">T</T>
            <U id="Letras">U</U>
            <V id="Letras">V</V>
            <X id="Letras">X</X>
            <Z id="Letras">Z</Z>
        </Div1>
    </Opacidade>
  </>
);
}
 
export default Alfabeto;