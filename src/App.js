import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes,redirect } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';

export default function App() {
  // State variables to hold email and password
  let data = {
    Email: '',
    password:''
}
  const[authentication,setAuthentication] = useState(false);
  const[verifyData,setverifyData] = useState(data);
  const[showLogout,setshowLogout] = useState(false);
  const handleSignUp = (signUp) => {
    // Access the form data here and perform necessary actions
    data.Email=signUp.email;
    data.password=signUp.password;
    setverifyData(data);
    console.log(data.Email,data.password);
    alert("Sign Up Successful")
  };

  const handleLogout=()=>{
    setAuthentication(false);
    setshowLogout(false);
    {<redirect element={<Login handleLogin = {handleLogin}/>}></redirect>}
    alert('Logout Successful');
  }

  const handleLogin = (formData) =>{
    console.log(typeof verifyData.Email);
    console.log(typeof formData.email)
    if(verifyData.Email==='' || formData.password===''){
    
      alert('Please Sign Up');
    }

   else if(verifyData.Email === formData.email){
        if(verifyData.password=== formData.password){
          setAuthentication(true);
          setshowLogout(true);
          
          alert('Login Successful Now you can access the Home')
        }
        else{
          setAuthentication(false);
          setshowLogout(true);

          alert('Password is incorrect please check again')
        }
    }
    else{
      setAuthentication(false);
      setshowLogout(true);

      alert('Invalid please check again')

    }
     
    console.log(formData)
      

  }


  return (
    <>
      <Router>
      <Navbar title='Weahter' home='Home'  valid = {showLogout} handleLogout={handleLogout} />
        <Routes>
        <Route path='/home' element={<Home authorised={authentication}/>} />
          <Route path='/signUp' element={<SignUp handleSignUp={handleSignUp} />}  />
          <Route path='/login' element={<Login handleLogin = {handleLogin}/>} />
          <Route path='/' element={<Home authorised={authentication}  />} />
        </Routes>
      </Router>
    </>
  )
}
