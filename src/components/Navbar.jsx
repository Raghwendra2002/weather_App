import React from 'react'
import{Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      
    <div className="container-fluid Navbari">
      <Link className="navbar-brand" to="/home">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
          </li>
          
        </ul>
        
        {!props.valid && <div>
          <Link to='/login'>
        <button type="button" className="btn btn-primary mx-4" >Login</button>
        </Link>
        <Link to = "/signUp" >
        <button type="button" className="btn btn-primary" >Sign Up</button>
        </Link>
        </div>  }
        {props.valid && <div>
          <Link to='/login'>
        <button type="button" className="btn btn-primary mx-4" 
       onClick={props.handleLogout} >Log Out</button>
        </Link>
        </div>  }
         
       


      </div>
    </div>
  </nav>
  )
}

Navbar.defaultText = {
  textTitle : "E-Learning",
  textHome : "Home"
}