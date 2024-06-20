import TotelScore from "./TotelScore";
import NumberSel from "./NumberSel";
import styled from 'styled-components';
import DiceeRoll from "./dicee/DiceeRoll";
import { useState } from "react";
import { Button } from "../styled/Btn";
import Rules from "./Rules.jsx";

function Gameplay() {
  const [score, setScore] = useState(0);
  const [selNumber, setSelNumber] = useState(null);
  const [diceValue, setDiceValue] = useState(1); // Default starting value
  const [isRolling, setIsRolling] = useState(false);
  const [Error, setError] = useState("");
  const [showRules , setshowRules] = useState(false)
 

  const displayRules = () => {
    setshowRules(true)
  }
  const resetScore = () => {
    setScore(0);
  }

  const rollDice = () => {
    if(!selNumber){
      setError("please select any number here")
       return;
    }setError("")
    if (isRolling) return;

    setIsRolling(true);
    
    const rollingIntervalTime = 100; // Update dice every 100ms
    const rollingTime = 1000 + Math.random() * 1000; // Randomize rolling time a bit

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
        if (selNumber === randomFace) {
          setScore(prev => prev + randomFace);
        } else {
          setScore(prev => prev - selNumber);
        }
        setSelNumber(null); // Reset selected number after rolling
      }
    }, rollingIntervalTime);
  };

  return (
    <MainContainer>
      <div className="Top_section">
        <TotelScore score={score} />
        <NumberSel  Error={Error} 
                    setError={setError} 
                    selNumber={selNumber} 
                    setSelNumber={setSelNumber} />
      </div>
      <DiceeRoll diceValue={diceValue} rollDice={rollDice} />
      <div className="btns">
        <Button onClick={resetScore} className="btn1">Reset score</Button>
        <Button onClick={()=> setshowRules((prev) => !prev)}
        
        className="btn2">{showRules? "Hide" : "Show" } rules</Button>
       { showRules && <Rules/>}
      </div>
    </MainContainer>
  );
}

export default Gameplay;

const MainContainer = styled.main`
  padding-top: 70px;

  .Top_section {
    display: flex;
    justify-content: space-between;
  }
  .btns{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
  }
`;
