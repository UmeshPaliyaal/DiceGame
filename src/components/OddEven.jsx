import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { playAudio } from './Gameplay';

const ButtonComponent = ({ Oddexecution, Evenexecution, disabled ,clickedButton , setclickedButton ,Error2 , setError2 }) => {
  // const [clickedButton, setClickedButton] = useState(null);
  const audioRef = useRef(null);

  const handleButtonClick = (button) => {
    playAudio(audioRef);
    setclickedButton(button);
    if (button === 'odd') {
      Oddexecution();
    } else if (button === 'even') {
      Evenexecution();
    }
    setError2('')
  };

  return (
    <ButtonContainer>
      <div className='one'>
      <StyledButton
        isClicked={clickedButton === 'odd'}
        onClick={() => handleButtonClick('odd')}
        disabled={disabled}
      >
        Odd
      </StyledButton>
      <StyledButton
        isClicked={clickedButton === 'even'}
        onClick={() => handleButtonClick('even')}
        disabled={disabled}
      >
        Even
      </StyledButton>
      </div>
      <div className='error'>{Error2}</div>  
      <audio ref={audioRef}>
        <source src="audio/click-one2.wav" type="audio/mp3" />
      </audio>
    </ButtonContainer>
  );
};

export default ButtonComponent;

const ButtonContainer = styled.div`
  
display: flex;
  flex-direction: column;
  align-items: end;

.one{
display: flex;
  gap: 100px;
  justify-content: center;
  margin-top: 50px;
  align-items: end;}

  .error{
    color: red;
    font-size:50px;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  height: 100px;
  width: 350px;
  font-size: 70px;
  font-weight: 700;
  border: 8px solid black;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ isClicked }) => (isClicked ? 'black' : 'transparent')};
  color: ${({ isClicked }) => (isClicked ? 'white' : 'black')};
  transition: box-shadow 0.1s ease, 0.4s background ease-in;

  &:hover {
    background-color: ${({ isClicked }) => (isClicked ? 'black' : '#777777')};
    color: white;
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
