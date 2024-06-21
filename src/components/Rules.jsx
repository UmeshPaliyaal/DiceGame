import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
        <h2>How to play the game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on the dice</p>
            <p>After clicking dice will roll and 
                if selected number matches with dice 
                number you will get number of points 
                you selected , if it doesn't matches
                you will loose same number of points 
                you selected.
            </p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer =styled.div`
border-radius:10px;
max-width:2000px;
margin:0 auto ;
background:#fbf1f1;
padding: 20px;

h2{
    font-size:100px;
    font-weight:bold;
}
.text{
    margin-top:24px;
    font-size:70px
}

`