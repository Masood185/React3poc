import React from "react";
import {Link, NavLink} from "react-router-dom"


const Navbar=()=>{

    return(
 <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">React App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" exact to="/Home">Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" exact to="/About">About</NavLink>
        </li>
        <li className="nav-item dropdown">
        <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
          
        </li> */}
        <li>
    <Link className="nav-link" to="/AddUser">Add Users</Link>

        </li>
     
      </ul>
     
    </div>
    <Link className="btn btn-danger" to="/">Logout</Link>

  </div>
</nav>

    )
}
export default Navbar;