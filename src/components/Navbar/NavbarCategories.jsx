import React from 'react'
import {Link, NavLink} from "react-router-dom"

const NavbarCategories = ({category}) => {
  return (
    <li><Link className="dropdown-item" to={`/Productos/${category}`}>{category}</Link></li>
  )
}

export default NavbarCategories