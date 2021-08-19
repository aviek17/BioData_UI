import React from 'react'
import {NavLink} from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry , page not found</h2>
                    <p className="mb-5">
                        The page you are looking for is either removed or is temporarily unavailable
                    </p>
                    <NavLink to="/">Return to Home</NavLink>
                </div>
            </div>
        </>
    )
}

export default Error
