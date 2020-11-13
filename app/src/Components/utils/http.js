import Axios from 'axios';

const http = Axios.create({
  // baseURL: `${process.env.BASE_URL}${process.env.API_VERSION}`,
  baseURL: 'http://localhost:5000/api/v1/',
});

export default http;
