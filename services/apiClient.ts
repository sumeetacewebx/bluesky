import axios from 'axios';

const ApiClient = () => {
  const defaultOptions = {
    baseURL: 'https://bluesky.web-xperts.xyz/api/v1.0.0/'
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // throw Error(error.response.data.message);
      return Promise.reject(error.response.data.message);
    }
  );

  instance.interceptors.request.use(
    (request) => {
      // request?.headers?.common?.Accept = 'application/json';
      return request;
    },
    (error) => {
      return Promise.reject(error.response.data.message);
    }
  );

  return instance;
};

export default ApiClient();
