import React from 'react'
import { Link } from 'react-router-dom'
import HeaderStyled, { Nav } from './styled'
import { FaArrowAltCircleLeft, FaEdit, FaMusic, FaQuestion, }  from 'react-icons/fa'
/************************************************************* */
function Header () {
   return (
      <>
         <HeaderStyled>
            <FaArrowAltCircleLeft id ='icon-arrow-set'></FaArrowAltCircleLeft>  
            <Nav>
               <FaMusic id = 'icon1' className = 'icon-nav1'></FaMusic>
               <FaQuestion id = 'icon2' className = 'icon-nav2'></FaQuestion>
               <FaEdit  id = 'icon3' className = 'icon-nav3'></FaEdit>
            </Nav>
         </HeaderStyled>
      </>
   )
};export default Header;
/************************************************************* */