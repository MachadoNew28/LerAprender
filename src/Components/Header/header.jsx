import React from 'react'
import { Link } from 'react-router-dom'
import HeadeR ,{Div} from './styled'
import ArrayIcons,{ArrayIconsDirections} from './icons'


const Header=()=>(
   <>
      <HeadeR>
       {
       ArrayIcons.map((item,index)=>
          <Link to={item.path} key={index} id="link"> {item.icon} </Link>
       )}         
     </HeadeR>

     <Div>
       {
        ArrayIconsDirections.map((item,index)=>
          <Link to={item.path} key={index} id="link" >{item.icon}</Link>
        )}
     </Div>
   </>
);export default Header;