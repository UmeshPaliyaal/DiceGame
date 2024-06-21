import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

function TotelScore({ score }) {
  const [displayScore, setDisplayScore] = useState(score);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (score !== displayScore) {
      setIsFlipping(true);
      setTimeout(() => {
        setDisplayScore(score);
        setIsFlipping(false);
      }, 600); // Duration of the flip animation
    }
  }, [score, displayScore]);

  return (
    <Container>
      <Score className={isFlipping ? 'flip' : ''}>{displayScore}</Score>
      <p>Total Score</p>
    </Container>
  );
}

export default TotelScore;

const flipAnimation = keyframes`
  0% {
    transform: rotateX(0);
  }
  50% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0);
  }
`;

const Container = styled.div`
  border: 5px solid black;
  text-align: center;
  gap: 5px;

  p {
    font-size: 130px;
    font-weight: 500;
    line-height: 100px;
  }
`;

const Score = styled.h1`
  font-size: 300px;
  line-height: 100px;
  display: inline-block;
  &.flip {
    animation: ${flipAnimation} 0.6s;
  }
`;
