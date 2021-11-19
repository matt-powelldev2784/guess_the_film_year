import randomWords from 'random-words';
import getFilmsApi from './getFilmApi';

const getFilms = async () => {
  let randomWord = randomWords();

  let films = await getFilmsApi(
    `https://www.omdbapi.com/?s=${randomWord}&apikey=8865cca5`
  );

   return films;
};

export default getFilms;
