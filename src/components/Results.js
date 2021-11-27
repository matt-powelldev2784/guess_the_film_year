import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Results = () => {
  const answersRedux = useSelector(state => {
    return {
      wrongAnswers: state.wrongAnswers,
      correctAnswers: state.correctAnswers,
    };
  });

  return (
    <ResultsContainer>
      <div>Correct {answersRedux.correctAnswers}</div>
      <ResultsBarOuter>
        <ResultsBarInner
          barHeight={`${answersRedux.correctAnswers * 36}px`}
          backgroundColor="green"
        />
      </ResultsBarOuter>

      <ResultsBarOuter>
        <ResultsBarInner
          barHeight={`${answersRedux.wrongAnswers * 36}px`}
          backgroundColor="red"
        />
      </ResultsBarOuter>
      <div>{answersRedux.wrongAnswers} Incorrect</div>
    </ResultsContainer>
  );
};

export default Results;

//---------------------------------------------------------------------

const ResultsContainer = styled.div`
  background-color: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
`;

const ResultsBarOuter = styled.div`
  position: relative;
  border-style: solid;
  border-color: white;
  border-width: 6px;
  width: 50px;
  height: 200px;
  margin: 2rem;
`;

const ResultsBarInner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  background-color: ${props => props.backgroundColor};
  width: 38px;
  height: ${props => props.barHeight};
`;
