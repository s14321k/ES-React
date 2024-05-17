import axios from "axios";

const REST_BASE_URL = "http://localhost:8989/";

export const getAllEmpService = () => axios.get(REST_BASE_URL + "emp/all");

export const createEmployee = (employee) =>
  axios.post(REST_BASE_URL + "emp/create", employee);

export const updateEmployee = (employee) =>
  axios.put(REST_BASE_URL + "emp/update", employee);

// export const updateEmployee = (employeeId, employee) =>

export const updateEmployeeAxios = async (employee) => {
  try {
    const response = await fetch(`${REST_BASE_URL}emp/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Updated data");
    console.log(JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};

// export const getEmployee = (employeeId) =>
//   axios.get(REST_BASE_URL + "emp/" + employeeId);

// export const getEmployee = async (employeeId) => {
//   try {
//     const response = await axios.get(REST_BASE_URL + "emp/" + employeeId);
//     // If status is 302, handle redirection
//     if (response.status === 302) {
//       const redirectUrl = response.headers["location"];
//       console.log("Redircted url " + redirectUrl);
//       if (redirectUrl) {
//         console.log("Yes Redircted url " + redirectUrl);
//         return await axios.get(redirectUrl);
//       }
//     }
//     return response;
//   } catch (error) {
//     console.error("Error fetching employee:", error);
//     throw error;
//   }
// };

export async function getEmployee(employeeId) {
  const res = await fetch(REST_BASE_URL + "emp/" + employeeId);
  const data = await res.json();
  console.log("Updated datas");
  console.log(data);
  return data;
}
