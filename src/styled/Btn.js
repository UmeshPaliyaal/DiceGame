import styled from "styled-components"

export const Button = styled.button`
background : black ;
color : white ;
height :95px;
width: 300px ;
font-size : 40px;
border-radius : 10px ;
transition: box-shadow 0.1s ease;
transition: 0.4s background ease-in;

&:hover{
 background : white ;
color : black ;
border: 1px solid black;
transition: 0.2s background ease-in;
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

`