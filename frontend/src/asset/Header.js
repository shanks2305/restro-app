import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="mb-1">
            <h3 className=" ml-4">Restro</h3>
            <ul>
                <li><Link className="links" to="/">Home</Link></li>
                <li><Link className="links" to="/signup">Sign Up</Link></li>
                <li><Link className="links" to="/signin">Sign In</Link></li>
            </ul>
        </nav>
    )
}

export default Header
