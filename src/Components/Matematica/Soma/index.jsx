import React, { memo, useState } from 'react'
import Header from '../../Header/header'
import {Div1,Opacidade} from '../../Inicio/styled';
import {A} from '../../Portugues/Alfabeto/styled'
import ArrayNumeros from '../Contagem/numeros'
import { H1 } from '../../Portugues/styled'
import { Div } from '../../Inicio/styled'
import { FaOilCan } from 'react-icons/fa';
import { array } from 'yup/lib/locale';



const Soma = () => {
    const [detectador,setDect] =useState('n')
  return(
   <Opacidade>   
     <Div className="div-top-theme">
        <H1 id="theme-top" >Soma</H1>
     </Div>
     <Div1 className = "ConteinerLetters">
        {
            ArrayNumeros.map((item,index) => 
             <>

                {
                  detectador==2? ArrayNumeros.map((item2,index2) =>
                  <>
                    
                    { setDect(item),
                         ArrayNumeros.indexOf (item2)<=9? ArrayNumeros.map((item3,index3) =>
                          <>
                           <A 
                            style = {{color:item.color}}
                            id = {item.id} 
                            key = {index} 
                            onClick = {item.action}> {index2}
                    </A>
                            +
                            <A 
                                style = {{color:item.color}}
                                id = {item.id} 
                                key = {index} 
                                onClick = {item.action}> {index3}
                           </A>
                           =
                            <A 
                                style = {{color:item.color}}
                                id = {item.id} 
                                key = {index} 
                                onClick = {item.action}> {index+index3}
                            </A>
                          </>
                         ):<></>
                    }
                  </>
                  ):<></>
                }

             </>) 
        }       
     </Div1>
   </Opacidade>
);
}
 
export default memo(Soma);