import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import TotelScore from "./TotelScore";
import NumberSel from "./NumberSel";
import DiceeRoll from "./dicee/DiceeRoll";
import { Button } from "../styled/Btn";
import Rules from "./Rules.jsx";
import CheckboxComponent from "./CheckBox.jsx";
import ButtonComponent from "./OddEven.jsx";

function Gameplay() {
  const [score, setScore] = useState(0);
  const [selNumber, setSelNumber] = useState(null);
  const [diceValue, setDiceValue] = useState(1); // Default starting value
  const [isRolling, setIsRolling] = useState(false);
  const [Error, setError] = useState("");
  const [Error2, setError2] = useState("");

  const [showRules, setshowRules] = useState(false);
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(false);
  const [selectedExpectation, setSelectedExpectation] = useState(null); // New state for selected expectation
  const [disabledButtons, setDisabledButtons] = useState(false); // State to disable Odd/Even buttons
  const [clickedButton , setclickedButton] = useState(null)

  const audioRef = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);


  const showrul = () => {
    playAudio(audioRef);
    setshowRules((prev) => !prev);
  };

  const resetScore = () => {
    playAudio(audioRef);
    setScore(0);
    setclickedButton(null);
    setSelNumber(null)
    setSelectedExpectation(null); // Reset expectation on score reset
    setDisabledButtons(false); // Reset button disablement
  };

  const Oddexecution = () => {
    setSelectedExpectation('odd');
    setDisabledButtons(true); // Disable buttons
  };

  const Evenexecution = () => {
    setSelectedExpectation('even');
    setDisabledButtons(true); // Disable buttons
  };

  const rollDice = () => {
    if (checkbox1 && !selNumber) {
      setError('please select any number here');
      setError2('')
      return;
    } else if (checkbox2 && !selectedExpectation) {
      setError2('please select odd or even');
      setError('')
      return;
    } else {
      setError('');
      setError2('');
    }

    if (isRolling) return;

    // Check if the correct checkbox is checked
    if ((checkbox1 && !checkbox2) || (checkbox2 && !checkbox1)) {
      setIsRolling(true);

      const rollingIntervalTime = 10; // Update dice every 100ms
      const rollingTime = 400 + Math.random() * 400; // Randomize rolling time a bit

      const startTime = Date.now();
      const rollInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const randomFace = Math.floor(Math.random() * 6) + 1; // Random face between 1 to 6
        setDiceValue(randomFace);

        if (elapsedTime >= rollingTime) {
          clearInterval(rollInterval);
          setIsRolling(false);

          setDiceValue(randomFace);

          // Check expectation and update score accordingly
          if (checkbox1) {
              if (selNumber === randomFace) {
                playAudio(audioRef2);
              setScore((prev) => prev + 10);
            } else{
              playAudio(audioRef3)
              setScore((prev) => prev - 3);
            }
          } else if (checkbox2) {
            if (selectedExpectation === 'odd' && [1, 3, 5].includes(randomFace)) {
              playAudio(audioRef2);
              setScore((prev) => prev + 3);
            } else if (selectedExpectation === 'even' && [2, 4, 6].includes(randomFace)) {
              playAudio(audioRef2);
              setScore((prev) => prev + 3);
            } else {
              playAudio(audioRef3)
              setScore((prev) => prev - 4);
            }
          }

          setSelNumber(null); // Reset selected number after rolling
          setDisabledButtons(false); // Enable buttons after roll
        }
      }, rollingIntervalTime);
    }
  };

  return (
    <MainContainer>
      <div className="Top_section">
        <TotelScore score={score} />
        <div>
          <div id="one">
            <CheckboxComponent
              checkbox1={checkbox1}
              setCheckbox1={setCheckbox1}
              checkbox2={checkbox2}
              setCheckbox2={setCheckbox2}
              setclickedButton={setclickedButton}
              setSelNumber={setSelNumber}
              
            />
            <NumberSel
              Error={Error}
              setError={setError}
              selNumber={selNumber}
              setSelNumber={setSelNumber}
              disabled={!checkbox1} // Disable NumberSel when checkbox2 is checked
            />
          </div>
          <div id="two">
            <ButtonComponent
              Oddexecution={Oddexecution}
              Evenexecution={Evenexecution}
              disabled={!checkbox2} // Disable ButtonComponent when checkbox1 is checked
              clickedButton={clickedButton}
              setclickedButton={setclickedButton}
              Error2={Error2}
              setError2={setError2}
            />
          </div>
        </div>
      </div>
      <div>
        <DiceeRoll 
        selNumber={selNumber} 
        diceValue={diceValue} 
        rollDice={rollDice} 
        selectedExpectation={selectedExpectation}/>
        <div className="btns">
          <Button onClick={resetScore} className="btn1">Reset Score</Button>
          <Button onClick={showrul} className="btn2">{showRules ? "Hide" : "Show"} Rules</Button>
          {showRules && <Rules />}
          <audio ref={audioRef}>
            <source src="audio/click-one2.wav" type="audio/mp3" />
          </audio>
          <audio ref={audioRef2}>
            <source src="audio/score-up.wav" type="audio/mp3" />
          </audio>
          <audio ref={audioRef3}>
            <source src="audio/score-down.wav" type="audio/mp3" />
          </audio>
        </div>
      </div>
    </MainContainer>
  );
}

export default Gameplay;

export const playAudio = (audioRef) => {
  if (audioRef && audioRef.current) {
    audioRef.current.play();
  }
};

const MainContainer = styled.main`
  padding-top: 70px;

  .Top_section {
    display: flex;
    justify-content: space-between;

    #one {
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        height: 50px;
        width: 50px;
        padding-top: 500px;
      }
    }
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
