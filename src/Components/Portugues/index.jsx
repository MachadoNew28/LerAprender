import React from 'react'
import {Link} from 'react-router-dom'
import { Div,Menu,Item,Title,Icon } from '../Home/styled'
import {} from 'react-icons/fa'
import ArrayItemMenu from './menu'
/*import HandleGetTitle from './AudioControl'*/

const Portugues = () => {
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
export default Portugues;