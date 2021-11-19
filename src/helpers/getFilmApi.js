import axios from 'axios';

const getFilmsApi = async url => {
  const films = await axios.get(url);

  let filmData = films.data.Search;
  return filmData;
};

export default getFilmsApi;
