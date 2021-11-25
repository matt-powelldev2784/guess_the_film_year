import { useState } from 'react';

const useRecordAnswers = (filmYearGuess, filmYearAnswer) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  if (filmYearGuess === filmYearAnswer) {
    return setCorrectAnswers(prev => {
      return prev + 1;
    });
  } else {
    setWrongAnswers(prev => {
      return prev + 1;
    });
  }
  console.log(correctAnswers);

  return wrongAnswers;
};

export default useRecordAnswers;
