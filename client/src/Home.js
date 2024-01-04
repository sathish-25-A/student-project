import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./App.css";


const Home = () => {

  const [search,setSearch]=useState('');
  


  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/delete/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

 

  const confirmDelete = (id) => {
    confirmDialog({
      message: "Are you sure you want to Delete?",
      header: "Confirmation",
      icon: "pi pi-trash",
      acceptClassName: "p-button-danger",
      accept: () => handleDelete(id),
      reject: () => handleDelete(),
    });
  };

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center ">
      <div className="w-60 bg-white rounded p-3">
        <h1>Student Management System</h1>
        
        <Form className="col-md-6 pt-1 m-1">
          <InputGroup className="col-md-6 sm" >
          <Form.Control placeholder='serach' className="col-md-6 sm " id='form'onChange={(e)=>setSearch(e.target.value)} />
          </InputGroup>
        </Form>
        
        <div className="d-flex justify-content-end">
          <Link to="/Add" className="btn btn-dark rounded-pill mb-3 ">
            Add
          </Link>
        </div>
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Location</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Education</th>
              <th>About</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((students)=>{
              return search.toLocaleLowerCase==='' ? students: students.FirstName.toLocaleLowerCase().includes(search); 
            }).map((students,index)=>(
              <tr key={index}>
              <td>{students.ID}</td>
              <td>{students.FirstName}</td>
              <td>{students.LastName}</td>
              <td>{students.Location}</td>
              <td>{students.Email}</td>
              <td>{students.DOB}</td>
              <td>{students.Education}</td>
              <td>{students.About}</td>
              <td>
                <Link to={`/edit/${students.ID}`} className="btn btn-sm  ">
                  <span>
                    <FaUserEdit className="icon edit m-1" />
                  </span>
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => confirmDelete(students.ID)}
                  className="btn btn-sm "
                >
                  <span>
                    <RiDeleteBin5Line className="icon delete m-1" />
                  </span>
                  Delete
                </button>


                <ConfirmDialog
                  breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                  style={{ width: "50vw" }}
                />
              </td>
            </tr>
            ))}
            
                
              
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
