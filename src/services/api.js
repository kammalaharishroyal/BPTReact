// services/api.js
import axios from 'axios';
export default axios.create({
  baseURL: 'http://localhost:8081/api', // your backend base URL
});
