import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../employeeSlice";
import { useState } from "react";

const Welcome = ({ getData }) => {
  const state = useSelector((state) => state.employee.employees);
  const dispatch = useDispatch();
  const [employeeData, setEmployeeData] = useState({
    username: "",
    email: "",
  });
  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };
  const handleAddEmployee = () => {
    dispatch(addEmployee(employeeData));
    setEmployeeData({
      username: "",
      email: "",
    });
  };
  return (
    <div>
      {getData.map((e, i) => {
        return (
          <div className="form-container">
            <h1 key={i}>Welcome {e.username} </h1>
            <input
              type="text"
              name="username"
              value={employeeData.username}
              placeholder="User Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={employeeData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <button className="submit-btn" onClick={handleAddEmployee}>
              Add Employee
            </button>
          </div>
        );
      })}
      <div className="form-data">
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {state.map((emp, index) => {
              return (
                <tr key={index}>
                  <td>{emp.username}</td>
                  <td>{emp.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Welcome;
