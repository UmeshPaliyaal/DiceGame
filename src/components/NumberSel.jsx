import styled from 'styled-components';

function NumberSel({ selNumber, setSelNumber ,setError , Error}) {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const numSelctorHandler = (value) =>{
    setSelNumber(value)
    setError("");
  }

  return (
    <NumSelCon>
         <p>Select Number</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            key={i}
            isSelected={value === selNumber}
            onClick={()=> numSelctorHandler(value) }
          >
            {value}
          </Box>
        ))}
      </div>
      <div className='error'>{Error}</div>    </NumSelCon>
  );
}

export default NumberSel;

const NumSelCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .error{
    color: red;
    font-size:50px;
  }

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 50px;
    font-weight: 700;
    margin-bottom:10px
  }
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 70px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
`;
