const validatefilms = async films => {
  const validatedFilms = [];

  try {
    while (validatedFilms.length < 4) {
      if (!films || films.length === 0) {
        throw new Error('film validation error');
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

      filmData.forEach(film => {
        validatedFilms.length < 4 &&
          hasFilmPoster(film) &&
          hasShortFilmNames(film) &&
          validatedFilms.push(film);
      });

      return validatedFilms;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default validatefilms;
