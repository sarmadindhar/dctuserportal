import axios from 'axios';

export const NetworkUtil = {

  async get(url: string, query: any = null) {
    return this.request("GET", url, null, query)
  },

  async post(
    url: string,
    body: any = null,
    query: any = null,
    isMultiPart = false
  ) {
    return this.request("GET", url, body, query, isMultiPart)
  },

  async request(
    method: any,
    url: any,
    body: any = null,
    query: any = null,
    isMultiPart = false
  ) {

    let API_ENDPOINT = `${process.env.REACT_APP_API_URL}${url}`;
  
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
      request.headers = { 'Content-Type': 'multipart/form-data' };
    }
    
    return axios(request).then(
      (response) => {
        if (response.status === 401 || response.status === 403) {
          return false;
        }
        return response.data;
      },
      ({ response }) => {
        if (response.status === 401 || response.status === 403) {
          return false;
        }
        return response.data;
      }
    );

  }
  
    
}
