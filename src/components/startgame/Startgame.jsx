import styled from 'styled-components'
import { Button } from '../../styled/Btn';
import { playAudio } from '../Gameplay';
import { useRef } from 'react';

function Startgame({toggle}) {

  const audioRef = useRef(null);

  const Toggle = () => {
    playAudio(audioRef);
    setTimeout(() => {
      toggle();
    }, 350);
    
  }
  return (
    <Container>
      <div>
      <img src="images/dices.png" alt="" />
      </div>
      <div className='Text'>
        <h1>
          DICE GAME
        </h1>
        <Button onClick={Toggle}>PLAY NOW</Button>
      </div>
      <audio ref={audioRef}>
        {/* Put your audio file link here */}
        <source src="audio/play-game.wav" type="audio/mp3" />
      </audio> 
    </Container>
  )
}

const Container = styled.div`

max-width : 1680px ;
display: flex ;
margin: 0 auto ;
height: 100vh;
align-items :center ;

.Text {
  h1{
    font-size:196px;
  }
}
`;



export default Startgame