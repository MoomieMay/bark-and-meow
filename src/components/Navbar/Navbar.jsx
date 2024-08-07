import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../assets/logo-contornos.png';
import './navbar.css'
import NavbarLink from './NavbarLink';
import { sections } from '../mock/mockData'


const Navbar = () => {
  return (
    <>
      <nav className="navbar w-100 p-2 border-bottom navbar-expand-lg">
        <div className="container-fluid ">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} alt="Logo Bark&Meow" height="60" className="d-inline-block align-top logo" />
          </Link>
          <div className="d-flex align-items-center" >
            <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
              {sections.map((element, index) => {
                return <NavbarLink key={index} section={element} />;
              })}
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar