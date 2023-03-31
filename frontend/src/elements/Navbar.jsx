// import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../assets/logopng.png"

const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   function handleRegisterClick(){
//     window.location.href = 'register'
//   }
//   function handleClickLogin(){
//     window.location.href = 'login'
//   }
//   function handlePredictionClick(){
//     window.location.href = 'login'
//   }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark h-75" style={{color:"white", backgroundColor: "rgb(0,20,50,0.7)"}}>
  <a className="navbar-brand" href="gg" >
  <img src={logo} alt="logo" id="headlogo" title="UpEvent" style={{ width: 100 }} ></img>
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="https://google.com">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://google.com">
          Link
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="https://google.com"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="https://google.com">
            Action
          </a>
          <a className="dropdown-item" href="https://google.com">
            Another action
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="https://google.com">
            Something else here
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="https://google.com">
          Disabled
        </a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>

  );
};

export default Navbar;
