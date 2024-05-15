import axios from "axios";

const REST_BASE_URL = "http://localhost:8989/";

export const getAllEmpService = () => axios.get(REST_BASE_URL + "emp/all");

export const createEmployee = (employee) =>
  axios.post(REST_BASE_URL + "emp/create", employee);

export const getEmployee = (employeeId) =>
  axios.get(REST_BASE_URL + "emp/" + employeeId);
