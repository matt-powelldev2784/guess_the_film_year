import React, { useState } from 'react';

import styles from './FilmItem.module.css';

import Card from '../UI/Card';
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
    guessDomElements = (
      <div>
        <p className={styles.correct}>Your guess was {submitGuess} Correct!</p>
      </div>
    );
  }

  if (submitGuess && !(submitGuess === props.filmYearAnswer)) {
    guessDomElements = (
      <div>
        <p className={styles.wrong}>
          Wrong! The correct year was {props.filmYearAnswer}
        </p>
      </div>
    );
  }

  //---------------------------------------------------------------------

  return (
    <Card className={styles.film_card}>
      <img className={styles.poster} src={props.poster} alt="img" />
      <p className={styles.title}>{props.title}</p>
      <p className={styles.title}></p>
      {guessDomElements}
    </Card>
  );
};

export default FilmItem;
