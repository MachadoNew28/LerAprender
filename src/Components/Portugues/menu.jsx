import React from 'react'
import { FaReadme,FaSchool } from "react-icons/fa"
import soundAlfabeto from './Audio/menus/pt.m4a'
import soundVogal from './Audio/menus/mp.m4a'
import soundConsoante from './Audio/menus/mt.m4a'
 const ArryItemMenu = [
   {
    path:'/Alfabeto',
    title: 'Alfabeto',
    icon:<FaReadme style = {{color:'#fff990dd'}}></FaReadme>,
    color:'#fff990dd',
    sound : function Play () {
      const audio = new Audio (soundAlfabeto)
      audio.play()
    } 
   },
   {
    path:'/Consoantes',
    title: 'Consoantes',
    icon:<FaSchool style = {{color:'#ffcaa0dd'}}></FaSchool>,
    color:'#ffcaa0dd',
    sound : function Play () {
      const audio = new Audio (soundConsoante)
      audio.play()
    } 
   },
   {
    path: '/Vogais',
    title:'Vogais',
    icon:<FaReadme style = {{color:'#ff1550dd'}}></FaReadme>,
    color:'#ff1550dd',
    sound : function Play () {
      const audio = new Audio (soundVogal)
      audio.play()
    } 
   },
   {
      path: '/Sílabas',
      title:'Sílabas',
      icon:<FaReadme style = {{color:'#ffabb0dd'}}></FaReadme>,
      color:'#ffabb0dd'
     },
     {
      path: '/Gramática',
      title:'Gramática',
      icon:<FaReadme style = {{color:'#ff0ff0dd'}}></FaReadme>,
      color:'#ff0ff0dd'
     }
      
      
]
export default ArryItemMenu;
 