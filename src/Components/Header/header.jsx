import React from 'react'
import { Link } from 'react-router-dom'
import HeadeR ,{Div} from './styled'
import ArrayIcons,{ArrayIconsDirections} from './icons'
import BgSound from '../Inicio/Audio/sound1.m4a'
import { useState } from 'react'
import { FaArrowLeft, FaMusic } from 'react-icons/fa'

const audio = new Audio(BgSound)
 function Header(){
   
  const [click,setClick] = useState(false);

  
  function HandleClick (  ){
        setClick(!click)
   }
   function Play(){
      click ? audio.pause():audio.play()
   }
   console.log(click);
   return(
      <>
      <HeadeR>
        <div className="div-direction">
           <Link id="link-direction">
             <FaArrowLeft id="icon-diretion">
             </FaArrowLeft>
           </Link>
        </div>
        <div className="div-menu-icon">
            {
            ArrayIcons.map((item,index)=>
              <Link to={item.path} key={index} id="link"> {item.icon} </Link>
            )}
            <Link to="#" onClick={HandleClick}  id="link">  <FaMusic id="icons"></FaMusic> </Link>         
        </div>
     </HeadeR>
      
   </>
   )
};export default Header;