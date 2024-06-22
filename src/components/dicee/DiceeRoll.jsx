import React, { useRef } from 'react';
import styled from 'styled-components';
import { playAudio } from '../Gameplay';

const DiceeRoll = ({selNumber , diceValue, rollDice }) => {
  const audioRef = useRef(null);

  const handleDiceClick = () => {
    rollDice();
   if(selNumber){ 
    playAudio(audioRef);
   }
  };

  return (
    <DiceContainer>
      <Scene>
        <Dice style={{ transform: getRotation(diceValue) }} onClick={handleDiceClick}>
          <Face className="face one" faceNumber={1} />
          <Face className="face two" faceNumber={4} />
          <Face className="face three" faceNumber={3} />
          <Face className="face four" faceNumber={2} />
          <Face className="face five" faceNumber={6} />
          <Face className="face six" faceNumber={5} />
        </Dice>
      </Scene>
      <audio ref={audioRef}>
        {/* Put your audio file link here */}
        <source src="public/audio/dice-audio.mp3" type="audio/mp3" />
      </audio>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default DiceeRoll;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 54px;
  }

  .dice {
    cursor: pointer;
  }
`;

const Scene = styled.div`
  width: 320px;
  height: 320px;
  perspective: 800px;
`;

const Dice = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
`;

const getRotation = (number) => {
  switch (number) {
    case 1:
      return 'rotateY(0deg)';
    case 2:
      return 'rotateY(90deg)';
    case 3:
      return 'rotateY(180deg)';
    case 4:
      return 'rotateY(-90deg)';
    case 5:
      return 'rotateX(90deg)';
    case 6:
      return 'rotateX(-90deg)';
    default:
      return 'rotateY(0deg)';
  }
};

const Face = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: white;
  border: 2px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  box-sizing: border-box;
  backface-visibility: hidden;
  background-image: ${({ faceNumber }) => `url('public/images/sides/dice_${faceNumber}.png')`};
  background-size: cover;

  &.one {
    transform: rotateY(0deg) translateZ(150px);
  }

  &.two {
    transform: rotateY(90deg) translateZ(150px);
  }

  &.three {
    transform: rotateY(180deg) translateZ(150px);
  }

  &.four {
    transform: rotateY(-90deg) translateZ(150px);
  }

  &.five {
    transform: rotateX(90deg) translateZ(150px);
  }

  &.six {
    transform: rotateX(-90deg) translateZ(150px);
  }
`;
