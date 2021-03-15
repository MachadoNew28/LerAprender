import React from 'react'
import Header from '../../Header/header'
import {Div1,Opacidade} from '../../Inicio/styled'
import Estilo,{Menu,Div1Conteiner,H1,Li,ListMenu,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,X,Z} from '../Alfabeto/styled'
import   { useState, useEffect } from 'react'
import SoundB from './Audio/b.m4a';
import SoundC from './Audio/c.m4a';
import SoundD from './Audio/d.m4a';
import SoundF from './Audio/f.m4a';
import SoundG from './Audio/g.m4a';
import SoundH from './Audio/h.m4a';
import SoundJ from './Audio/j.m4a';
import SoundL from './Audio/l.m4a';
import SoundM from './Audio/m.m4a';
import SoundN from './Audio/n.m4a';
import SoundP from './Audio/p.m4a';
import SoundQ from './Audio/q.m4a';
import SoundR from './Audio/r.m4a';
import SoundS from './Audio/s.m4a';
import SoundT from './Audio/t.m4a';
import SoundV from './Audio/v.m4a';
import SoundX from './Audio/x.m4a';
import SoundZ from './Audio/z.m4a';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function PlayB(){
  const audio=new Audio(SoundB);
  setInterval(audio.play(),4000);
}
function PlayC(){
    const audio=new Audio(SoundC);
    setInterval(audio.play(),4000)
  }
  
  function PlayD(){
    const audio=new Audio(SoundD);
    setInterval(audio.play(),4000)
  }
  function PlayF(){
    const audio=new Audio(SoundF);
    setInterval(audio.play(),4000)
  }
  function PlayG(){
    const audio=new Audio(SoundG);
    setInterval(audio.play(),4000)
  }
  function PlayH(){
    const audio=new Audio(SoundH);
    setInterval(audio.play(),4000)
  }
  function PlayJ(){
    const audio=new Audio(SoundJ);
    setInterval(audio.play(),4000)
  }
  function PlayL(){
    const audio=new Audio(SoundL);
    setInterval(audio.play(),4000)
  }
  function PlayM(){
    const audio=new Audio(SoundM);
    setInterval(audio.play(),4000)
  }
  function PlayN(){
    const audio=new Audio(SoundN);
    setInterval(audio.play(),4000)
  }
  function PlayP(){
    const audio=new Audio(SoundP);
    setInterval(audio.play(),4000)
  }
  function PlayQ(){
    const audio=new Audio(SoundQ);
    setInterval(audio.play(),4000)
  }
  function PlayR(){
    const audio=new Audio(SoundR);
    setInterval(audio.play(),4000)
  }
  function PlayS(){
    const audio=new Audio(SoundT);
    setInterval(audio.play(),4000)
  }
  function PlayT(){
    const audio=new Audio(SoundT);
    setInterval(audio.play(),4000)
  }
  function PlayV(){
    const audio=new Audio(SoundV);
    setInterval(audio.play(),4000)
  }
  function PlayX(){
    const audio=new Audio(SoundX);
    setInterval(audio.play(),4000)
  }
  function PlayZ(){
    const audio=new Audio(SoundZ);
    setInterval(audio.play(),4000)
  }
function Hover(){
  const audio=new Audio(SoundB);
   audio.play();
}


 


const Consoante=()=>{
  
  return(
  
  <>
   
    <Estilo>
    <Header></Header>
      <Opacidade>
          {/*<H1> <H1>Tema:Alfabeto</H1></H1>*/}
          <Div1 border="4px solid #25c9d4">
            <B onClick={PlayB} id="Letras">B</B>
            <C onClick={PlayC} id="Letras">C</C>
            <D onClick={PlayD} id="Letras">D</D>
            <F onClick={PlayF} id="Letras">F</F>
            <G onClick={PlayG} id="Letras">G</G>
            <H onClick={PlayH} id="Letras">H</H>
            <J onClick={PlayJ} id="Letras">J</J>
            <L onClick={PlayL} id="Letras">L</L>
            <M onClick={PlayM} id="Letras">M</M>
            <N onClick={PlayN} id="Letras">N</N>
            <P onClick={PlayP} id="Letras">P</P>
            <Q onClick={PlayQ} id="Letras">Q</Q>
            <R onClick={PlayR} id="Letras">R</R>
            <S onClick={PlayS} id="Letras">S</S>
            <T onClick={PlayT} id="Letras">T</T>
            <V onClick={PlayV} id="Letras">V</V>
            <X onClick={PlayX} id="Letras">X</X>
            <Z onClick={PlayZ} id="Letras">Z</Z>
          </Div1>
      </Opacidade>
    </Estilo>
  </>
);
}
 
export default Consoante;