import React from 'react'
import Estilo,{Opacidade,Div1,Menu,ListMenu,
   LinkPortugues,A,B,C,D,E,I,Li,LinkConsoante,
   LinkVogal} 
from '../Inicio/styled'
import {FaAssistiveListeningSystems, FaBookOpen,
    FaBrain,FaCircle,FaGgCircle,FaHatCowboySide,
    FaHeartbeat,FaMusic,FaPencilAlt,FaQuestion,
    FaSortNumericDown, FaSquare, FaSquareRootAlt, 
    FaTree}
from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {MenuMatematica} from '../Inicio/menu'
import { H1 } from '../Portugues/Alfabeto/styled'

const Matematica=()=>{
return(
<>
<Estilo>
  <Opacidade>
      <H1>Matemática</H1>
     <Div1 > 
        <MenuMatematica>d</MenuMatematica>
    </Div1>
  </Opacidade>
</Estilo>
</>
);
}
export default Matematica;