import randomWords from 'random-words';
import getFilmsApi from './getFilmApi';

const getFilms = async specifiedRandomWord => {
  try {
    let randomWord = randomWords();

    if (specifiedRandomWord) {
      randomWord = specifiedRandomWord;
    }

    const films = await getFilmsApi(
      `https://www.omdbapi.com/?s=${randomWord}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
    );

    if (!films) {
      throw new Error('api error');
    }

    return films;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default getFilms;
