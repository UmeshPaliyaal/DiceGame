import { useState } from 'react'
import Startgame from './components/startgame/Startgame'
import Gameplay from './components/Gameplay';




function App() {

const [isGameStarted ,setisGameStarted] = useState(false);

const ToggleGamePlay = () =>{
  setisGameStarted((prev) =>!prev)
};

  return (
   <>
   {isGameStarted ? <Gameplay/> :<Startgame toggle = {ToggleGamePlay}/> }
   </>
  )
}
export default App
