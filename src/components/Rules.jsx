import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
        <h2>How to play the game</h2>
        <div className="text">
            <p>click on the checkbox to ensure which game you want to play</p>
            <p>If you click on checkbox 1 then - select any number 
            If you click on checkbox 1 then - select any button
            </p>
            <p>Now click on the dice </p>
            <p className="p5">After clicking ,dice will roll and -- 
                if you selected checkbox1 then selected any number and if that number 
                matches with dice number - you will get <span>10 points </span>.
                and if fails to match number - yo will loose <span>3 points</span>.
                if you selected checkbox2 then selected- (Odd) button and if 
                dice stops on an Odd Number - you will get <span> 3 points</span>.
                but if dice stopped on even number - you will looose <span> 4 points</span>.
                if you selected checkbox2 then selected- (Even) button and if 
                dice stops on an Even Number - you will get <span> 3 points</span>.
                but if dice stopped on even number - you will looose <span> 4 points</span>.
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
.p5 span{
    color: red;
    }

`