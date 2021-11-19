const validate4Films = (films, filmDataCycleCount) => {
  if (!films || filmDataCycleCount > 10) {
    return { films, status: 'film_api_error' };
  }

  films = films.filter(film => {
    return film.Poster !== 'N/A' && film.Title.length < 50;
  });

  if (films.length < 4) {
    return { films, status: 'less_than_4_films' };
  }

  if (films.length > 4) {
    films.length = 4;
  }

  return { filmsData: films, status: 'ok' };
};

// new XMLHttpRequest();
//     http.open('HEAD', film.poster , false);
//     http.send();
//     if (http.status != 404)
//     {

//     }

export default validate4Films;
