import React from 'react'
import Header from '../../Header/header'
import {Div1,Opacidade} from '../../Inicio/styled'
import Estilo,{A} from '../Alfabeto/styled'
import soundB from './Audio/b.m4a';
import soundC from './Audio/c.m4a';
import soundD from './Audio/d.m4a';
import soundF from './Audio/f.m4a';
import soundG from './Audio/g.m4a';
import soundH from './Audio/h.m4a';
import soundJ from './Audio/j.m4a';
import soundL from './Audio/l.m4a';
import soundM from './Audio/m.m4a';
import soundN from './Audio/n.m4a';
import soundP from './Audio/p.m4a';
import soundQ from './Audio/q.m4a';
import soundR from './Audio/r.m4a';
import soundS from './Audio/s.m4a';
import soundT from './Audio/t.m4a';
import soundV from './Audio/v.m4a';
import soundX from './Audio/x.m4a';
import soundZ from './Audio/z.m4a';
import { H1 } from '../../Portugues/styled'
import { Div } from '../../Inicio/styled'

 
        {/*<H1> <H1>Tema:Alfabeto</H1></H1>*/}
const ArrayLetras=[
   
  {
   action:function Play(){
       const audio=new Audio(soundB);
       setInterval(audio.play(),4000)
     },
   letter:'B',
   id:'Letras',
   color:'#00aa11'
 },
 {
   action:function Play(){
       const audio=new Audio(soundC);
       setInterval(audio.play(),4000)
     },
   letter:'C',
   id:'Letras',
   color:'#ff66ff',
 },
 {
   action:function Play(){
       const audio=new Audio(soundD);
       setInterval(audio.play(),4000)
     },
   letter:'D',
   id:'Letras',
   color:'#00ff99',
 },
 {
   action:function Play(){
       const audio=new Audio(soundF);
       setInterval(audio.play(),4000)
     },
   letter:'F',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundG);
       setInterval(audio.play(),4000)
     },
   letter:'G',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundH);
       setInterval(audio.play(),4000)
     },
   letter:'H',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundJ);
       setInterval(audio.play(),4000)
     },
   letter:'J',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundL);
       setInterval(audio.play(),4000)
     },
   letter:'L',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundM);
       setInterval(audio.play(),4000)
     },
   letter:'M',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundN);
       setInterval(audio.play(),4000)
     },
   letter:'N',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundP);
       setInterval(audio.play(),4000)
     },
   letter:'P',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundQ);
       setInterval(audio.play(),4000)
     },
   letter:'Q',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundR);
       setInterval(audio.play(),4000)
     },
   letter:'R',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundS);
       setInterval(audio.play(),4000)
     },
   letter:'S',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundT);
       setInterval(audio.play(),4000)
     },
   letter:'T',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundV);
       setInterval(audio.play(),4000)
     },
   letter:'V',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundX);
       setInterval(audio.play(),4000)
     },
   letter:'X',
   id:'Letras'
 },
 {
   action:function Play(){
       const audio=new Audio(soundZ);
       setInterval(audio.play(),4000)
     },
   letter:'Z',
   id:'Letras'
 },

]


const Consoante=()=>{
  
  return(
  <>
   
    <Estilo>
    <Header></Header>
      <Opacidade>

        <Div className="div-top-theme">
         <H1 id="theme-top">Consoantes</H1>
       </Div>
          <Div1 border="4px solid #25c9d4">
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
    </Estilo>
  </>
);
}
 
export default Consoante;