import React from 'react'; 
import {Global} from './GlobalStyle/GlobalStyled'
import BgSound from './Components/Inicio/Audio/sound1.m4a'
import Routes from './routes'
function PlayP(){
  const audio=new Audio(BgSound);
 
  audio.play() 
}


function App() {
  return (
    
    <>
      <Global></Global>
      <Routes Onclick={PlayP()}></Routes>
    </>
  );
}
 
export default App;
