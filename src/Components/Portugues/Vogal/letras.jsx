import React from 'react'
import soundA from './Audio/a.m4a';
import soundE from './Audio/e.m4a';
import soundI from './Audio/i.m4a';
import soundO from './Audio/o.m4a';
import soundU from './Audio/u.m4a';


const ArrayLetras=[
  {
    action:function Play(){
        const audio=new Audio(soundA);
        setInterval(audio.play(),4000)
      },
    letter:'A',
    id:'Letras',
    color:'#0066ff'
  },
  {
    action:function Play(){
        const audio=new Audio(soundE);
        setInterval(audio.play(),4000)
      },
    letter:'E',
    id:'Letras',
    color:'#0066ff'
  },
  {
    action:function Play(){
        const audio=new Audio(soundI);
        setInterval(audio.play(),4000)
      },
    letter:'I',
    id:'Letras',
    color:'#0066ff'
  },
  {
   action:function Play(){
       const audio=new Audio(soundO);
       setInterval(audio.play(),4000)
     },
   letter:'O',
   id:'Letras',
   color:'#00aa11'
 },
 {
   action:function Play(){
       const audio=new Audio(soundU);
       setInterval(audio.play(),4000)
     },
   letter:'U',
   id:'Letras',
   color:'#ff66ff',
 }
]
export default ArrayLetras;