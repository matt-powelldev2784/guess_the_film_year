import React, { useState, useEffect } from 'react';
import Button from './Button';
import styled from 'styled-components';

import checkYearIsValid from '../helpers/checkYearIsValid';

//---------------------------------------------------------------------

const GuessInput = props => {
  const [enteredYear, setEnteredYear] = useState('');
  const [isValid, setIsValid] = useState(true);

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
    <Form onSubmit={submitHandler}>
      <label>Your Guess:</label>
      {isValid && (
        <Input onChange={yearChangeHandler} value={enteredYear} autoFocus />
      )}
      {!isValid && (
        <InputError
          onChange={yearChangeHandler}
          value={enteredYear}
          autoFocus
        />
      )}
      <Button label="Submit" />
    </Form>
  );
};

export default GuessInput;

const Form = styled.form`
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #777;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`;

const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: black;
  border: 2px solid;
  border-color: #008cba;
  text-align: center;
  font-size: 1rem;
`;

const InputError = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: white;
  border: 2px solid;
  border-color: white;
  background-color: rgba(255, 0, 0, 0.8);
  text-align: center;
  font-size: 1rem;
`;
