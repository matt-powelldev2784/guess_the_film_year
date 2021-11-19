import React, { useState } from 'react';
import styled from 'styled-components';

import Guess from './Guess';

//---------------------------------------------------------------------

const FilmItem = props => {
  const [submitGuess, setSubmitGuess] = useState('');

  const guessSubmitted = filmYearGuess => {
    setSubmitGuess(filmYearGuess);
    props.onRecordAnswers(filmYearGuess, props.filmYearAnswer);
  };

  //---------------------------------------------------------------------

  //dom element before guess
  let guessDomElements = (
    <Guess
      onSaveFilmYear={props.onSaveFilmYear}
      onGuessSubmitted={guessSubmitted}
      filmYearAnswer={props.filmYearAnswer}
      renderInputError={props.renderInputError}
    />
  );

  //check for error
  if (props.error === true) {
    guessDomElements = <div></div>;
  }

  //dom elements after guess
  if (submitGuess && submitGuess === props.filmYearAnswer) {
    guessDomElements = <Correct>Your guess was {submitGuess} Correct!</Correct>;
  }

  if (submitGuess && !(submitGuess === props.filmYearAnswer)) {
    guessDomElements = (
      <Wrong>Wrong! The correct year was {props.filmYearAnswer}</Wrong>
    );
  }

  //---------------------------------------------------------------------

  return (
    <FilmCard>
      <FilmPoster src={props.poster} alt="img" />
      <FilmTitle>{props.title}</FilmTitle>
      <p></p>
      {guessDomElements}
    </FilmCard>
  );
};

export default FilmItem;

const FilmCard = styled.div`
  background-color: none;
  width: auto;
  margin: 1rem;
  padding: 1rem;
  min-height: 335px;
`;

const FilmPoster = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  border-radius: 6px;
  width: 8rem;
`;

const FilmTitle = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #777;
  text-align: center;
  font-size: 1rem;
`;

const Correct = styled.p`
  color: green;
  margin: auto;
  text-align: center;
  font-size: 1rem;
`;

const Wrong = styled.p`
  color: red;
  margin: auto;
  text-align: center;
  font-size: 1rem;
`;
