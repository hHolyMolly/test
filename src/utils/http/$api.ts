import axios, { AxiosInstance } from 'axios';

const BASE_URL: string = 'http://localhost:4444/api';

const $api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default $api;
