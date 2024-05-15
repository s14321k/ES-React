import React, { useEffect, useState } from "react";
import { getAllEmpService } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmplyees] = useState([]);

  // UseEffect takes two parameters. 1- call back function, 2- Dependency list
  useEffect(() => {
    getAllEmpService()
      .then((response) => {
        setEmplyees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigator = useNavigate();
  function addNewEmploye() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  //   const dummyData = [
  //     {
  //       id: "1",
  //       firstName: "sarath",
  //       lastName: "kumar",
  //       email: "sarath@kumar.com",
  //     },
  //     {
  //       id: "2",
  //       firstName: "kumar",
  //       lastName: "sarath",
  //       email: "kumar@sarath.com",
  //     },
  //   ];
  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      {/* mb stands for margin bottom */}
      <button className="btn btn-primary mb-2" onClick={addNewEmploye}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
