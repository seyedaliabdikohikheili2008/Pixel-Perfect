import axios from "axios";

const API_BASE_URL = "http://188.121.111.8:3001";

const ApiClient = axios.create({
  baseURL: API_BASE_URL,
});

ApiClient.interceptors.response.use((res) => {
  return res;
});

export default ApiClient;
