import axios from "axios";

const REST_BASE_URL = "http://localhost:8989/emp/all";

export const listEmployees = () => {
  return axios.get(REST_BASE_URL);
};
