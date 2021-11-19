import React, { useState, useEffect } from 'react';

import Title from './components/Title';
import FilmItem from './components/FilmItem';
import Results from './components/Results';
import ErrorModal from './UI/ErrorModal';
import AnswersContext from './context/AnswersContext';

import getFilms from './helpers/getFilms';
import validate4Films from './helpers/validate4Films';
import FilmDataErrorItem from './UI/FilmDataErrorItem';
import FilmDataLoadingItem from './UI/FilmDataLoadingItem';

import styles from './index.module.css';

//---------------------------------------------------------------------

const App = props => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [inputError, setInputError] = useState(false);
  const [filmDataLoading, SetFilmDataLoading] = useState(true);
  const [filmData, setFilmData] = useState('');
  const [filmDataError, SetFilmDataError] = useState(false);

  //---------------------------------------------------------------------

  useEffect(() => {
    let films;
    let filmDataCycleCount = 0;

    let get4Films = async () => {
      filmDataCycleCount++;

      films = await getFilms();

      films = validate4Films(films, filmDataCycleCount);

      if (films.status === 'less_than_4_films') {
        console.log('less_than_4_films', films);
        get4Films();
        return;
      }

      if (films.status === 'ok') {
        SetFilmDataLoading(false);
        setFilmData(films.filmsData);
      }

      if (films.status === 'film_api_error') {
        console.log('film_api_error');
        SetFilmDataLoading(false);
        SetFilmDataError(true);
      }
    };
    get4Films();
  }, []);

  //---------------------------------------------------------------------

  const recordAnswers = (filmYearGuess, filmYearAnswer) => {
    if (filmYearGuess === filmYearAnswer) {
      setCorrectAnswers(prev => {
        return prev + 1;
      });
    } else {
      setWrongAnswers(prev => {
        return prev + 1;
      });
    }
  };

  //---------------------------------------------------------------------

  const renderInputError = () => {
    setInputError(true);
  };

  const clearInputError = () => {
    setInputError(null);
  };

  //---------------------------------------------------------------------

  const appErrorModal = (
    <ErrorModal
      title="Error"
      message="Enter a valid year. Please use the 4 digit YYYY format."
      label="Ok"
      //className={styles.error_modal}
      onConfirm={clearInputError}
    />
  );

  const ErrorItem = <FilmDataErrorItem />;

  const LoadingItem = <FilmDataLoadingItem />;

  //---------------------------------------------------------------------

  console.log('map film data', filmData);

  let filmCard;
  if (filmData) {
    filmCard = filmData.map((filmItem, i) => (
      <FilmItem
        key={i}
        title={filmItem.Title}
        filmYearAnswer={filmItem.Year}
        poster={filmItem.Poster}
        error={filmItem.Error}
        onRecordAnswers={recordAnswers}
        renderInputError={renderInputError}
      />
    ));
  }

  //---------------------------------------------------------------------

  return (
    <AnswersContext.Provider value={{ wrongAnswers, correctAnswers }}>
      <header className={styles.header}>
        <div className={styles.full_page}>
          <Title />
          {inputError && appErrorModal}
          {filmDataError && ErrorItem}
          {filmDataLoading && LoadingItem}
          <div className={styles.film_card__container}>
            {!filmDataLoading && !filmDataError && filmCard}
          </div>
          <Results
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
          />
        </div>
      </header>
    </AnswersContext.Provider>
  );
};

export default App;
