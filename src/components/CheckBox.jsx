import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { playAudio } from './Gameplay';

const CheckboxComponent = ({ checkbox1, setCheckbox1, checkbox2, setCheckbox2 }) => {
  const audioRef = useRef(null)
  const handleCheckbox1Change = () => {
    playAudio(audioRef)
    if (!checkbox1) {
      setCheckbox1(true);
      setCheckbox2(false);
    } else {
      setCheckbox1(false);
    }
  };

  const handleCheckbox2Change = () => {
    playAudio(audioRef)
    if (!checkbox2) {
      setCheckbox2(true);
      setCheckbox1(false);
    } else {
      setCheckbox2(false);
    }
  };

  return (
    <CheckboxContainer>
      <label>
        <input
          type="checkbox"
          checked={checkbox1}
          onChange={handleCheckbox1Change}
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkbox2}
          onChange={handleCheckbox2Change}
        />
      </label>
      <audio ref={audioRef}>
        {/* Put your audio file link here */}
        <source src="audio/check-box.wav" type="audio/mp3" />
      </audio>
    </CheckboxContainer>
  );
};

export default CheckboxComponent;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top:100px;
  gap: 400px;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  input[type="checkbox"] {
    width: 50px;
    height: 50px;
  }
`;
