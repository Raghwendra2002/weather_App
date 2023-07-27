import React, { useState } from 'react';
import './signUp.css';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSignUp(formData);
  };

  return (
    <div className="container signUp mt-4">
      <h1 className='text-center'>Sign Up</h1>
      <form className=" mt-4 text-center" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" name='firstName' placeholder="First Name" required onChange={handleChange} />
          </div>
          <div className="col">
            <input type="text" className="form-control" name='lastName' placeholder="Last Name" required onChange={handleChange} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <input type="email" className="form-control" name="email" id="email" placeholder="E-mail" required onChange={handleChange} />
          </div>
        </div>
        <div className="row mt-4">
          <input type="password" className="form-control pass pass" name="password" id="password" placeholder="Password" required onChange={handleChange} />
        </div>
        <button className="btn btn-outline-primary mt-4" type="submit">Sign Up</button>
      </form>
    </div>
  );
}