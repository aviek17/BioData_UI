import React, { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from 'react-router-dom'
import "../App.css"

import { UserContext } from "../App"



const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                     <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                    
                    <li class="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/logout">Logout</NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/signup">Register</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/login">Log In</NavLink>
                    </li>
                    
                </>
            )
        }
    
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand bio" to="/">BioData</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <RenderMenu />

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
