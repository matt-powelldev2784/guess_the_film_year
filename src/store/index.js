import { createStore } from 'redux';

const answersInitalState = { correctAnswers: 0, wrongAnswers: 0 };

const resultsReducer = (state = answersInitalState, action) => {
  if (action.type === 'correct') {
    return {
      correctAnswers: state.correctAnswers + 1,
      wrongAnswers: state.wrongAnswers,
    };
  }

  if (action.type === 'wrong') {
    return {
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers + 1,
    };
  }

  return state;
};

const store = createStore(resultsReducer);

export default store;
