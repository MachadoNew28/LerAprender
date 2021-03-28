import React from 'react'
import { Div,Menu,} from '../../Home/styled'
import Letra from './styled'
import {} from 'react-icons/fa'
import ArrayLetras from './letras'
/*import HandleGetTitle from './AudioControl'*/

const Alfabeto = () => {
  return(
  <> 
   <Div className="div-top-theme">
      <Menu>
      {
        ArrayLetras.map((item,index) =>
          <>
            <Letra style = {{backgroundColor:item.color}}
            /* onClick = {HandleGetTitle (item.title)}*/
              onClick = {item.sound}>
            {/*Renderização de todas as letras no Document */}
              {item.letter}
            </Letra>
          </>
      )}
      </Menu>
    </Div> 
  </>
);
}
export default Alfabeto;