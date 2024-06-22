import React, { useState } from 'react';
import styled from 'styled-components';
import { playAudio } from './Gameplay';
import { useRef } from 'react';

const ButtonComponent = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const audioRef = useRef(null);


  const handleButtonClick = (button) => {
    playAudio(audioRef)
    setClickedButton(button);
  };

  return (
    <ButtonContainer>
      <StyledButton
        isClicked={clickedButton === 'button1'}
        onClick={() => handleButtonClick('button1')}
      >
       Odd
      </StyledButton>
      <StyledButton
        isClicked={clickedButton === 'button2'}
        onClick={() => handleButtonClick('button2')}
      >
        Even
      </StyledButton>
      <audio ref={audioRef}>
        {/* Put your audio file link here */}
        <source src="audio/click-one2.wav" type="audio/mp3" />
      </audio>
    </ButtonContainer>
  );
};

export default ButtonComponent;

const ButtonContainer = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  margin-top: 90px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  height:100px;
  width:350px;
  font-size:70px;
  font-weight:700px
border:8px solid black;
border-radius:10px;
  cursor: pointer;
  background-color: ${({ isClicked }) => (isClicked ? 'black' : 'transparent')};
  color: ${({ isClicked }) => (isClicked ? 'white' : 'black')};

transition: box-shadow 0.1s ease;
transition: 0.4s background ease-in;
  &:hover {
    background-color: #777777;
    color:white;

  }
    &:active {
  animation: pushInside 0.1s ease forwards;
}
@keyframes pushInside {
  0% {
      transform: scale(1);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  50% {
      transform: scale(0.95);
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  100% {
      transform: scale(1);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
}


`;
