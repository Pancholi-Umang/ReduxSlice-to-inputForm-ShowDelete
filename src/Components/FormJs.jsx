import React, { useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { add } from "../redux/AddSlice";
import { useDispatch, useSelector } from "react-redux";

const FormJs = () => {
  const dispatch = useDispatch();

  const initialVal = {
    Email: "",
    Password: "",
  };
  const [inputs, setInput] = useState(initialVal);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...inputs, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (inputs.Email.length > 1 && inputs.Password.length > 1) {
      dispatch(add(inputs));
      setInput(initialVal);
    } else {
      setInput(initialVal);
    }
  };

  const getSelector = useSelector((state) => state.add.data);
  console.log(getSelector)
  return (
    <div className="container mt-5 w-50">
      <form>
        <div style={{ width: "50%" }} className="mx-auto mb-5">
          <MDBInput
            className="mb-4"
            value={inputs.Email}
            autoComplete="off"
            onChange={handleChange}
            type="e mail"
            id="form1Example1"
            label="Email address"
            name="Email"
          />
          <MDBInput
            className="mb-4"
            value={inputs.Password}
            autoComplete="off"
            onChange={handleChange}
            type="password"
            id="form1Example2"
            label="Password"
            name="Password"
          />
          <MDBBtn onClick={handleClick}>Add Data</MDBBtn>
        </div>
      </form>

      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {getSelector.map((val, index) => {
            return(
              <tr key={index}>
              <td>{val.Email}</td>
              <td>{val.Password}</td>
            </tr>
            )
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default FormJs;
