import { createSlice, configureStore } from '@reduxjs/toolkit';

const answersInitalState = { correctAnswers: 0, wrongAnswers: 0 };

const resultsSlice = createSlice({
  name: 'results',
  initialState: answersInitalState,
  reducers: {
    correctAnswer(state) {
      state.correctAnswers++;
    },
    wrongAnswer(state) {
      state.wrongAnswers++;
    },
  },
});

const store = configureStore({
  reducer: resultsSlice.reducer,
});

export const resultsActions = resultsSlice.actions;

export default store;
