import React from 'react'
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../assets/logo.png';
import './navbar.css'

const Navbar = ({ secciones }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light w-100 p-2 border-bottom">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo Bark&Meow" height="60" className="d-inline-block align-top" />
          </a>
          <div className="d-flex align-items-centere" >
            <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link" aria-current="page" href="#">{secciones[0]}</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" aria-current="page" href="#">{secciones[1]}</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" aria-current="page" href="#">{secciones[2]}</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" aria-current="page" href="#">{secciones[3]}</a>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar