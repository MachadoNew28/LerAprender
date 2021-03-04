import React from 'react'
import { FaHome,FaMusic,FaList, FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

const ArrayIcons=[
    {
      path:'/',
      icon: <FaHome id="icons"></FaHome>
    },
    { 
      
      icon: <FaMusic id="icons"></FaMusic>  
    },
    {
      icon: <FaList id="icons"></FaList> 
    }
]

export default ArrayIcons;

export const ArrayIconsDirections=[
  {
    path:'/',
    icon:  <FaArrowAltCircleLeft id="icons"></FaArrowAltCircleLeft>
  },
  { path:'/',
    icon: <FaArrowAltCircleRight id="icons"></FaArrowAltCircleRight>  
  }
]


