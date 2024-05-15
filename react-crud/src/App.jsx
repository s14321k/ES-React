import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmployeeComponent } from "./components/EmployeeComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:8989/emp */}
          <Route path="/" element={<ListEmployeeComponent />}></Route>
          {/* http://localhost:8989/emp/all */}
          <Route path="/allEmp" element={<ListEmployeeComponent />}></Route>

          {/* http://localhost:8989/emp/create */}
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>

          {/* http://localhost:8989/emp/id */}
          <Route path="/edit-employee/:id" element={<EmployeeComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
