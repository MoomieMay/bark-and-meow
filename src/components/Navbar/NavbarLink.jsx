import React from 'react'
import {Link, NavLink} from "react-router-dom"
import { categories } from '../mock/mockData';
import NavbarCategories from './NavbarCategories';

const NavbarLink = ({ section }) => {
    return (
        <li className="nav-item mx-2">
            {section === 'Productos' ? (
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {section}
                    </Link>
                    <ul className="dropdown-menu">
                        {categories.map((element, index) => {
                            return <NavbarCategories key={index} category={element} />;
                        })}
                    </ul>
                </li>

            ) : (
                <Link className="nav-link" to={`/${section}`}>{section}</Link>
            )}
        </li>
    )
}

export default NavbarLink
