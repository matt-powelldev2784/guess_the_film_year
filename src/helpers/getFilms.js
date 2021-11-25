import randomWords from 'random-words';
import getFilmsApi from './getFilmApi';

const getFilms = async specifiedRandomWord => {
  try {
    const validatedFilms = [];

    while (validatedFilms.length < 4) {
      let randomWord = randomWords();

      if (specifiedRandomWord) {
        randomWord = specifiedRandomWord;
      }

      console.log(randomWord);
      const films = await getFilmsApi(
        `https://www.omdbapi.com/?s=${randomWord}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );

      if (!films) {
        throw new Error('api error');
      }

      const filmData = films.map((film, i) => {
        return {
          key: parseInt(i),
          title: film.Title,
          poster: film.Poster,
          year: film.Year,
        };
      });

      const hasFilmPoster = film => film.poster !== 'N/A';
      const hasShortFilmNames = film => film.title.length < 50;

      while (validatedFilms.length > 0) {
        validatedFilms.shift();
      }

      filmData.forEach((film, i) => {
        validatedFilms.length < 4 &&
          hasFilmPoster(film) &&
          hasShortFilmNames(film) &&
          validatedFilms.push(film);
      });

      console.log('validted films', validatedFilms);
    }

    return validatedFilms;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default getFilms;
