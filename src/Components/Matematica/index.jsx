import React from 'react'
import {Opacidade,Div1}
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
  <Opacidade>
      <H1>Matemática</H1>
     <Div1 > 
        <MenuMatematica>
          
        </MenuMatematica>
    </Div1>
  </Opacidade>
</>
);
}
export default Matematica;