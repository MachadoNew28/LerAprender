import React from 'react'
import Header from '../../Header/header'
import {Div,Opacidade,Div1,A} from '../../Inicio/styled'
import {H1} from '../styled'
import SoundA from './Audio/a.m4a';
import SoundB from './Audio/b.m4a';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import VoiceAlfa from '../Alfabeto/Audio/click.m4a'

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
  setTimeout(audio.play(),900000);
}
 


const Silabas=()=>{
  return(
    <Opacidade>
      <Div>
        <H1 id="theme-top">Formação de sílabas</H1>
      </Div>
      <Div1>
      </Div1>
    </Opacidade>
);
}
 
export default Silabas;