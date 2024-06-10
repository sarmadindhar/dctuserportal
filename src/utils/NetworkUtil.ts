import axios from 'axios';
import { MockDataUtil, mockEndpoint } from './MockDataUtil';

console.log(import.meta.env.VITE_API_BASE_URL,'---');
const NetworkUtil = (
  method: any,
  url: any,
  body: any = null,
  query: any = null,
  isMultiPart = false,
  headers: any = {}
) => {
  let API_ENDPOINT = `${import.meta.env.VITE_API_BASE_URL}${url}`;

  if (
    mockEndpoint(url)
  ) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(MockDataUtil(url)), 1000);
    });
  }

  if (query != null) {
    API_ENDPOINT +=
      '?' +
      new URLSearchParams({
        ...query,
      });
  }

  const token = sessionStorage.getItem('token');
  if (token != null) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  let request: any = {
    method: method,
    url: API_ENDPOINT,
  };

  if (body !== null) {
    request.data = body;
  }

  if (isMultiPart) {
    headers = { ...headers, 'Content-Type': 'multipart/form-data' };
  }

  if(import.meta.env.VITE_APP_API_KEY)
  {
    headers = { ...headers, 'Api-Key': `${import.meta.env.VITE_APP_API_KEY}` };
  }

  request.headers = headers;

  return axios(request).then(
    (response) => {
      if (response.status === 403) {
        console.log("response.status------------------", response.status)
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
        return false;
      }
      if (response.status === 401 || response.status === 403) {
        return false;
      }
      return response.data;
    },
    ({ response }) => {
      if (response.status === 403) {
        console.log("response.status------------------", response.status)
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
        return false;
      }
      if (response.status === 401 || response.status === 403) {
        return false;
      }
      return response.data;
    }
  );
};

export default NetworkUtil;
