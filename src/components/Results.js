import React, { useContext } from 'react';
import styled from 'styled-components';

import AnswersContext from '../context/AnswersContext';


const Results = props => {
  const answers = useContext(AnswersContext);

  //let correctAnswers = `${answers.correctAnswers * 36}px`;
  // let wrongAnswers = `${props.wrongAnswers * 36}px`;

  return (
    <ResultsContainer>
      <div>Correct {answers.correctAnswers}</div>
      <ResultsBarOuter>
        <ResultsBarInner
          barHeight={`${answers.correctAnswers * 36}px`}
          backgroundColor="green"
        />
      </ResultsBarOuter>

      <ResultsBarOuter>
        <ResultsBarInner
          barHeight={`${answers.wrongAnswers * 36}px`}
          backgroundColor="red"
        />
      </ResultsBarOuter>
      <div>{answers.wrongAnswers} Incorrect</div>
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