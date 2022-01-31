import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={'navbar navbar-dark navbar-expand-lg bg-primary px-4'}>
            <div className="navbar-brand">
                ToDo List
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/'}>Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/about'}>Информация</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;