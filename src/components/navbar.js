import React from 'react'
import logo from './media/logo.png'
export default function Navbar(){
    return(
      <nav style={{background:"#13212E" }} className="navbar navbar-expand-lg navbar-dark  fixed-top" >
      <div className="container-fluid">
        <a className="navbar-brand brandy" href="#"><img src={logo}></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#abt">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sch">Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tms">Team</a>
            </li>
           
          </ul>
          <form className="d-flex">
            {/*SOCIAL ICONS*/}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><i className="fab fa-discord"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
            </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
        );
}