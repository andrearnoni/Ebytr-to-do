import axios from 'axios';

export default axios.create({
  baseURL: `https://ebytr-original.herokuapp.com/`
});