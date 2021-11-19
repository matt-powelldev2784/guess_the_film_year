import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import styles from './Guess.module.css';

import checkYearIsValid from '../helpers/checkYearIsValid';

//---------------------------------------------------------------------

const Guess = props => {
  const [enteredYear, setEnteredYear] = useState('');
  const [isValid, setIsValid] = useState(true);
  const enteredYear1 = useRef();

  //---------------------------------------------------------------------

  const yearChangeHandler = event => {
    setEnteredYear(event.target.value.trim());
    //checkInputIsValid(event.target.value.trim());
  };

  //---------------------------------------------------------------------

  useEffect(() => {
    const useEffectTimer = setTimeout(() => {
      if (enteredYear === undefined || enteredYear === '') {
        setIsValid(true);
      } else {
        setIsValid(checkYearIsValid(enteredYear));
      }
    }, 1000);

    return () => {
      clearTimeout(useEffectTimer);
    };
  }, [enteredYear]);

  //---------------------------------------------------------------------

  const submitHandler = event => {
    console.log('useRef example', enteredYear1.current.value);
    event.preventDefault();

    let filmYearGuess = enteredYear;
    if (checkYearIsValid(enteredYear) === false) {
      props.renderInputError(true);
      return;
    }

    props.onGuessSubmitted(filmYearGuess);
  };

  //---------------------------------------------------------------------

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label className={styles.guess_title}>Your Guess:</label>
      <input
        className={`${styles.input} ${!isValid && styles.nan}`}
        onChange={yearChangeHandler}
        ref={enteredYear1}
      ></input>
      <Button label="Submit" />
    </form>
  );
};

export default Guess;
