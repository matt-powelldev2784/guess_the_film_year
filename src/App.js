import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import backgroundImage from './img/scar_bg.jpg';
import Title from './components/Title';
import FilmItem from './components/FilmItem';
import Results from './components/Results';
import ErrorModal from './UI/ErrorModal';

import getFilms from './helpers/getFilms';
import validateFilms from './helpers/validatedFilms';

import FilmDataErrorItem from './UI/FilmDataErrorItem';
import FilmDataLoadingItem from './UI/FilmDataLoadingItem';

//---------------------------------------------------------------------

const App = () => {
  const [inputError, setInputError] = useState(false);
  const [filmDataLoading, setFilmDataLoading] = useState(true);
  const [filmData, setFilmData] = useState('');
  const [filmDataError, setFilmDataError] = useState(false);

  //---------------------------------------------------------------------

  useEffect(() => {
    const get4Films = async () => {
      try {
        const films = await getFilms();
        const validatedFilms = await validateFilms(films);
        validatedFilms.length < 4 ? get4Films() : setFilmDataLoading(false);
        setFilmData(validatedFilms);
      } catch (e) {
        setFilmDataError(true);
        setFilmDataLoading(false);
      }
    };
    get4Films();
  }, []);

  //---------------------------------------------------------------------

  const dispatch = useDispatch();

  const recordResults = (filmYearGuess, filmYearAnswer) => {
    if (filmYearGuess === filmYearAnswer) {
      dispatch({ type: 'correct' });
    } else {
      dispatch({ type: 'wrong' });
    }
  };

  //---------------------------------------------------------------------

  const renderInputError = () => {
    setInputError(true);
  };

  const clearInputError = () => {
    setInputError(false);
  };

  const inputErrorModal = (
    <ErrorModal
      title="Error"
      message="Enter a valid year. Please use the 4 digit YYYY format."
      label="Ok"
      onConfirm={clearInputError}
    />
  );

  const ErrorItem = <FilmDataErrorItem />;
  const LoadingItem = <FilmDataLoadingItem />;

  //---------------------------------------------------------------------

  console.log('final film data', filmData);

  let filmCard;
  if (filmData) {
    filmCard = filmData.map(filmItem => (
      <FilmItem
        key={filmItem.key}
        title={filmItem.title}
        filmYearAnswer={filmItem.year}
        poster={filmItem.poster}
        renderInputError={renderInputError}
        onRecordAnswersRedux={recordResults}
      />
    ));
  }

  //---------------------------------------------------------------------

  return (
    <Fragment>
      <Header />
      <AppContainer>
        <Title />
        {inputError && inputErrorModal}
        {filmDataError && ErrorItem}
        {filmDataLoading && LoadingItem}
        <FilmCardContainer>
          {!filmDataLoading && !filmDataError && filmCard}
        </FilmCardContainer>
        {!filmDataError && !filmDataLoading && <Results />}
      </AppContainer>
    </Fragment>
  );
};

export default App;

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  text-align: center;
  background-color: rgba(7, 7, 7, 0.9);
  min-height: 100vh;
`;

const Header = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to top,
      rgba(7, 7, 7, 0.7),
      rgba(7, 7, 7, 1)
    ),
    url(${backgroundImage});
  background-size: cover;
  min-height: 100vh;
  background-position: top;
  background-blend-mode: difference;
  position: relative;
`;

const FilmCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: flex-end;
`;
