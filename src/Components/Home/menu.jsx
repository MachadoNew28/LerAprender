import React from 'react'
import { FaReadme,FaSchool,FaSquareFull } from "react-icons/fa"
import soundPt from './Audio/menus/pt.m4a'
import soundMp from './Audio/menus/mp.m4a'
import soundMt from './Audio/menus/mt.m4a'
 const ArryItemMenu = [
   {
    path:'/Português',
    title: 'Português',
    icon:<FaReadme style = {{color:'#fff990dd'}}></FaReadme>,
    color:'#fff990dd',
    sound : function Play () {
      const audio = new Audio (soundPt)
      audio.play()
    } 
   },
   {
    path:'/Matemática',
    title: 'Matematica',
    icon:<FaSchool style = {{color:'#ffcaa0dd'}}></FaSchool>,
    color:'#ffcaa0dd',
    sound : function Play () {
      const audio = new Audio (soundMt)
      audio.play()
    } 
    
   },
   {
    path: '/CoresFormas',
    title:'Manu & Plast',
    icon:<FaReadme style = {{color:'#ff1550dd'}}></FaReadme>,
    color:'#ff1550dd',
    sound : function Play () {
      const audio = new Audio (soundMp)
      audio.play()
    } 
   },
   {
      path: '/EstudodoMeio',
      title:'Estudo do Meio',
      icon:<FaReadme style = {{color:'#ffabb0dd'}}></FaReadme>,
      color:'#ffabb0dd'
     },
     {
      path: '/EducaçãoMusical',
      title:'Música',
      icon:<FaReadme style = {{color:'#ff0ff0dd'}}></FaReadme>,
      color:'#ff0ff0dd'
     },
     {
      path: '/Vocabulario',
      title:'Vocabulário',
      icon:<FaReadme style = {{ color:'#ffd440dd'}}></FaReadme>,
      color:'#ffd440dd'
     },
     {
      path: '/Inglês',
      title:'Inglês',
      icon:'',
      color:'#ff6110dd'
     },
     {
      path: 'Países',
      title:'Países',
      icon:'',
      color:'#ff6110dd'
     },
     {
      path: 'Cultura Geral',
      title:'Cultura Geral',
      icon:'',
      color:'#ff6110dd'
     },
      
]
export default ArryItemMenu;
 