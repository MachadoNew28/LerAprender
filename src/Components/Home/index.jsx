import React from 'react'
import { Div } from './styled'
import {FaArrow,aad} from 'react-icons/fa'
function Play(){
  const audio = new Audio(fundo)
  audio.play()
}

const Inicio=()=>{
  return(
  <> 
   <Div className="div-top-theme">
      <FaArrow id = 'icon-arrow-set'></FaArrow>
    </Div> 
  </>
);
}
export default Inicio;