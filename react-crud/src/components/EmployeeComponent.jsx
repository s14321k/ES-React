import { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployeeAxios,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

export const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      console.log("id== " + id);
      getEmployee(id)
        .then((response) => {
          console.log("response");
          console.log(response);
          setFirstName(response.firstName);
          setLastName(response.lastName);
          setEmail(response.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    // Checks the input feilds are not empty
    if (validateForm()) {
      const employee = {
        firstName,
        lastName,
        email,
      };
      console.log("saveOrUpdateEmployee employee");
      console.log(employee);

      if (id) {
        const empWithId = { ...employee, id };
        updateEmployeeAxios(empWithId)
          .then((respose) => {
            // console.log(respose.data);
            console.log(respose);
            navigator("/");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => console.log(response.data))
          .catch((error) => console.error(error));
        navigator("/allEmp");
      }
    }
  }

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First Name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last Name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="container">
      {" "}
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {/* <h2 className="text-center">Add Employee</h2> */}
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee First Name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  onChange={handleFirstName}
                ></input>
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  onChange={handleLastName}
                ></input>
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="password"
                  placeholder="Enter Employee Email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={handleEmail}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
