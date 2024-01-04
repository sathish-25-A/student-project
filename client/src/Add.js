import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    Location: "",
    Email: "",
    DOB: "",
    Education: "",
    About: "",
  });
  const navigate = useNavigate();
  const handleSubmit=(e) =>{
    e.preventDefault();
    axios.post('http://localhost:8081/students', values)
    .then(res => {
        console.log(res);
        navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="FirstName" className="form-label">
              FirstName:
            </label>
            <input
              type="text"
              className="form-control"
              id="FirstName"
              placeholder="Enter Your Name"
              onChange={e =>
                setValues({ ...values, FirstName: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="LastName" className="form-label">
              LastName:
            </label>
            <input
              type="text"
              className="form-control"
              id="LastName"
              placeholder="Enter Last Name"
              onChange={e =>
                setValues({ ...values, LastName: e.target.value })
              }
            />
          </div>
          <div className="col-md-7">
            <label htmlFor="Location" className="form-label">
              Location:
            </label>
            <input
              type="text"
              className="form-control"
              id="Location"
              placeholder=" Enter Your Location"
              onChange={e =>
                setValues({ ...values, Location: e.target.value })
              }
            />
          </div>
          <div className="col-md-7">
            <label htmlFor="Email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="Enter Your  Email"
              onChange={e => setValues({ ...values, Email: e.target.value })}
            />
          </div>
          <div className="col-md-7">
            <label htmlFor="dob" className="form-label">
              DOB:
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              onChange={e => setValues({ ...values, DOB: e.target.value })}
            />
          </div>
          <div className="col-md-7">
            <label htmlFor="education" className="form-label">
              Education:
            </label>
            <input
              type="text"
              className="form-control"
              id="education"
              placeholder="Enter Education"
              onChange={e =>
                setValues({ ...values, Education: e.target.value })
              }
            />
          </div>
          <div className="col-md-7">
            <label htmlFor="About" className="form-label">
              About:
            </label>
            <textarea
              className="form-control"
              id="About"
              onChange={e => setValues({ ...values, About: e.target.value })}
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
