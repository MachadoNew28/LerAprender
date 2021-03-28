import React from 'react'
import { Div,Menu,Item,Title,Icon } from './styled'
import {} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import ArrayItemMenu from './menu'
/*import HandleGetTitle from './AudioControl'*/

const Inicio = () => {
  return(
  <> 
 
   <Div className="div-top-theme">
      <Menu>
        {
          ArrayItemMenu.map((item,index) =>
           <>
           <Link id = "link" to = {item.path}>
              <Item style = {{backgroundColor:item.color}}
              /* onClick = {HandleGetTitle (item.title)}*/
                onClick = {item.sound}>
                <Icon> {item.icon}</Icon>
                <Title> {item.title}</Title>
              </Item>
           </Link>
           </>
          )
        }
      </Menu>
    </Div> 
  </>
);
}
export default Inicio;