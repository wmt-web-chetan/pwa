import axios from "axios";
const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosApi.interceptors.response.use(
  (response) => {
    if (response.status == 302) {
      localStorage.clear();
      window.location.replace("/login");
    } else {
      return response.data;
    }
  },
  (error) => {
    if (error.response.status == 401) {
      // Your logic here
    } else {
      return Promise.reject(error);
    }
  }
);
const makeRequest = (method, url, config = {}) => {
  let requestConfig = {
    ...config,
    method,
    url,
  };
  return axiosApi(requestConfig);
};
export const get = (url, config = {}) => makeRequest("get", url, config);
export const post = (url, config = {}) => makeRequest("post", url, config);
export const patch = (url, config = {}) => makeRequest("patch", url, config);
export const del = (url, config = {}) => makeRequest("delete", url, config);
