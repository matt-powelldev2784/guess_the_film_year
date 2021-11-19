import randomWords from 'random-words';
import getFilmsApi from './getFilmApi';

const getFilms = async specifiedRandomWord => {
  let randomWord = randomWords();

  if (specifiedRandomWord) {
    randomWord = specifiedRandomWord;
  }

  let films = await getFilmsApi(
    `https://www.omdbapi.com/?s=${randomWord}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
  );

  return films;
};

export default getFilms;
