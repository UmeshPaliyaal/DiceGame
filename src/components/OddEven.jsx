import styled from "styled-components"
function OddEven({}) {

    const btnSelctorHandler = (value) =>{
        setSelNumber(value)
       
      }

  return (
           <Container>
              <button
              onClick={()=> btnSelctorHandler(value)}>Odd</button>
              <button
              onClick={()=> btnSelctorHandler(value)}>Even</button>
           </Container>  
  )
}

export default OddEven;

const Container = styled.div`

display:flex;
align-items:center;
justify-content:center;
margin-top:90px;
gap:100px;

button{
  height:100px;
  width:350px;
  font-size:70px;
  font-weight:700px
  border:8px solid black;
  border-radius:10px;
  cursor:pointer;
  background-color: ${(props) => (props.isSelected ? 'black' : '#64C6FE')};
  color: ${(props) => (props.isSelected ? '#64C6FE' : 'black')};
}

`