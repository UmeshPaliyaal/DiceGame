import TotelScore from "./TotelScore";
import NumberSel from "./NumberSel";
import styled from 'styled-components';
import DiceeRoll from "./dicee/DiceeRoll";
import { useState } from "react";
import { Button } from "../styled/Btn";
import Rules from "./Rules.jsx";
import CheckboxComponent from "./CheckBox.jsx";
import ButtonComponent from "./OddEven.jsx";
import React, { useRef } from 'react';


function Gameplay() {
  const [score, setScore] = useState(0);
  const [selNumber, setSelNumber] = useState(null);
  const [diceValue, setDiceValue] = useState(1); // Default starting value
  const [isRolling, setIsRolling] = useState(false);
  const [Error, setError] = useState("");
  const [showRules , setshowRules] = useState(false);
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(false);

  const audioRef = useRef(null);
  const audioRef2 = useRef(null);



 
  const showrul= () => {
    playAudio(audioRef);
    setshowRules((prev) => !prev)
  }
  const resetScore = () => {
    playAudio(audioRef);
    setScore(0);
  }

  const rollDice = () => {
    if(!selNumber){
      setError("please select any number here")
       return;
    }else{
      setError("");
    }

    if (isRolling) return;

    setIsRolling(true);
    
    const rollingIntervalTime = 10; // Update dice every 100ms
    const rollingTime = 400 + Math.random() * 400; // Randomize rolling time a bit

    // Start rolling animation
    const startTime = Date.now();
    const rollInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      
      const randomFace = Math.floor(Math.random() * 6) + 1; // Random face between 1 to 6
      setDiceValue(randomFace);

      if (elapsedTime >= rollingTime) {
        clearInterval(rollInterval);
        setIsRolling(false);

        // Ensure final face is correct

        setDiceValue(randomFace);
      
        const OddNumber = [1];
        const EvenNumber = [2,4,6]

        
        if (selNumber === randomFace ) {
          playAudio(audioRef2)
          setScore(prev => prev + 2);
        } 
        setSelNumber(null); // Reset selected number after rolling
      }
    }, rollingIntervalTime);
  };

  return (
    <MainContainer>
      <div className="Top_section">
        <TotelScore score={score} />
        <div>
          <div id="one">
            <CheckboxComponent checkbox1={checkbox1}
                               setCheckbox1={setCheckbox1}
                               checkbox2={checkbox2}
                               setCheckbox2={setCheckbox2}/>
        <NumberSel  Error={Error} 
                    setError={setError} 
                    selNumber={selNumber} 
                    setSelNumber={setSelNumber} 
                    disabled={!checkbox2}/>
                    </div>
                    <div id="two">
                    <ButtonComponent
                    checkbox1={checkbox1}
                    setCheckbox1={setCheckbox1}
                    checkbox2={checkbox2}
                    setCheckbox2={setCheckbox2}
                    disabled={!checkbox2}/>
                    </div>
        </div>          
      </div>
      <div>
      <DiceeRoll selNumber={selNumber} diceValue={diceValue} rollDice={rollDice} />
      <div className="btns">
        <Button onClick={resetScore} className="btn1">Reset Score</Button>
        <Button onClick={showrul}
        
        className="btn2">{showRules? "Hide" : "Show" } Rules</Button>
       { showRules && <Rules/>}

       <audio ref={audioRef}>
        {/* Put your audio file link here */}
        <source src="audio/click-one2.wav" type="audio/mp3" />
      </audio>
      <audio ref={audioRef2}>
        {/* Put your audio file link here */}
        <source src="audio/score-up.wav" type="audio/mp3" />
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

    #one{
    display:flex;
    align-items:center;
    justify-content:center;
    input{
    height:50px;
    width:50px;
    padding-top:500px;
    }
    }
  }
  .btns{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
  }
  
  
`;
