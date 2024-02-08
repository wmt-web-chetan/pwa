import { get, post, patch, del } from "../../helpers/apiWrapper";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// Function to get a list of network locations

export const getUser = async () => {
  // data: for request body
  // params: for request parameters
  // const config = {
  //   params: params,
  //   data:data
  // };

  return await get(`${API_BASE_URL}/users`);
};