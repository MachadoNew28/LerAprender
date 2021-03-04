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
import {MenuPortugues} from '../Inicio/menu'
import { H1 } from '../Portugues/Alfabeto/styled'

const Portugues=()=>{
  const hora=Date.now;
return(
<>
 <Estilo>
   <Opacidade>
       <Link to="/" >{hora}<FaChevronLeft></FaChevronLeft></Link><H1>Língua Portuguesa</H1>
      <Div1 > 
         <MenuPortugues></MenuPortugues>
     </Div1>
   </Opacidade>
 </Estilo>
</>
);
}
export default Portugues;