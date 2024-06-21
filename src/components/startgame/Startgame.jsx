import styled from 'styled-components'
import { Button } from '../../styled/Btn';

function Startgame({toggle}) {
  return (
    <Container>
      <div>
      <img src="public/images/dices.png" alt="" />
      </div>
      <div className='Text'>
        <h1>
          DICE GAME
        </h1>
        <Button onClick={toggle}>PLAY NOW</Button>
      </div>
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