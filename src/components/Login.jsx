import React,{useState} from 'react'
import './Login.css';
export default function Login(props) {

  const [formData, setFormData] = useState({
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
    props.handleLogin(formData);
  };

  return (



    <div>
        <div className="container text-center mt-5 cont">
            <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-2">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail4" aria-describedby="emailHelp" name='email' onChange={handleChange} required/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword1" name='password' onChange={handleChange} required />
        </div>
        <h2 id='error'>-</h2>
        <button type="submit" className="btn btn-outline-primary">Login</button>
         </form>

           </div>
           </div>
  )
}
