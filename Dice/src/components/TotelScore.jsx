import styled from 'styled-components';

function TotelScore({ score }) {
  return (
    <Container>
      <div>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </Container>
  );
}

export default TotelScore;

const Container = styled.div`
  border: 5px solid black;
  text-align: center;
  gap: 5px;

  h1 {
    font-size: 300px;
    line-height: 100px;
  }

  p {
    font-size: 130px;
    font-weight: 500;
    line-height: 100px;
  }
`;
