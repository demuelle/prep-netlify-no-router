import axios from 'axios';

const search = async (query) =>
  axios.get(`//www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);

export default { search };
