import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    

    useEffect(()=>{
        axios.get('http://localhost:8081/edit/'+id)
        .then(res =>{
            console.log(res)
            setValues({...values,FirstName:res.data[0].FirstName, LastName:res.data[0].LastName, Location:res.data[0].Location,
            Email:res.data[0].Email,DOB:res.data[0].DOB,Education:res.data[0].Education,About:res.data[0].About})
        })
        .catch(err =>console.log(err))
    },[])
    
    const [values, setValues] = useState({
        FirstName: '',
        LastName: '',
        Location: '',
        Email: '',
        DOB: '',
        Education: '',
        About: '',
      });
      const handleUpdate=(event)=>{
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id,values)
        .then(res =>{
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err));
      }
  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <form className="row g-3" onSubmit={handleUpdate} >
        <h2>Edit </h2>
        <div className="col-md-6">
          <label htmlFor="FirstName" className="form-label">
            FirstName:
          </label>
          <input
            type="text"
            className="form-control"
            id="FirstName"
            placeholder="Enter Your Name"
            value={values.FirstName}
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
            value={values.LastName}
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
            value={values.Location}
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
            value={values.Email}
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
            value={values.DOB}
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
            value={values.Education}
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
            value={values.About}
            onChange={e => setValues({ ...values, About: e.target.value })}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-dark">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Edit