import React from 'react'
import Header from '../Header/header'
import Estilo,{Opacidade,Div1,Menu,ListMenu,
       LinkPortugues,A,B,C,D,E,I,Li,LinkConsoante,
       LinkVogal} 
from './styled'
import {FaAssistiveListeningSystems, FaBackward, FaBookOpen,
        FaBrain,FaCircle,FaGgCircle,FaHatCowboySide,
        FaHeartbeat,FaHome,FaList,FaMusic,FaPencilAlt,FaQuestion,
        FaSortNumericDown, FaSoundcloud, FaSquare, FaSquareRootAlt, 
        FaTree}
from 'react-icons/fa'
import {Link} from 'react-router-dom'
import   { useState, useEffect } from 'react'
import Click from './Audio/onclick.m4a'
import MenuPrincipal from './menu'
import { H1 } from '../Portugues/Alfabeto/styled'
 
const Inicio=()=>{
  return(
  <> 
    
    
      <Opacidade>
         <Div1 > 
            <MenuPrincipal></MenuPrincipal>
        </Div1>
      </Opacidade>
     
 </>
);
}
export default Inicio;