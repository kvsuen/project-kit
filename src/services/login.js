import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const login = async (credentials) => {
  const res = await axios.post(`${baseUrl}/login`, credentials);
  console.log("=====res========", res);
  return res.data;
}

export default {
  login
}