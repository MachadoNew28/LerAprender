 import React from 'react'
 import Estilo,{Opacidade,Div1,Menu,ListMenu,
    LinkPortugues,A,B,C,D,E,I,Li,LinkConsoante,
    LinkVogal} 
from '../Inicio/styled'
import {FaAssistiveListeningSystems, FaBookOpen,
     FaBrain,FaChevronCircleLeft,FaCircle,FaGgCircle,FaHatCowboySide,
     FaHeartbeat,FaMusic,FaPencilAlt,FaQuestion,
     FaSortNumericDown, FaSquare, FaSquareRootAlt, 
     FaTree,FaChevronLeft}
from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {MenuMatematica, MenuPortugues} from '../Inicio/menu'
import { H1 } from '../Portugues/Alfabeto/styled'
var click=1;
const Portugues=()=>{
  const hora=Date.now;
return(
<>
  <Opacidade>
      <Div1 > 
        { click==2 ?<MenuMatematica></MenuMatematica>
         :<MenuPortugues></MenuPortugues>}
     </Div1>
   </Opacidade>
</>
);
}
export default Portugues;