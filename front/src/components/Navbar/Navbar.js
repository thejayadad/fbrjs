import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = ({active, setActive}) => {
  return (
    <header>
        <div className='logo'>
           <Link to="/">Vent Board</Link>
        </div>

        <ul>
            <Link to="/auth" >
                <li
                style={{ textDecoration: "none" }}
                onClick={() => setActive("home")}
                className={`${active === "create" ? "active" : ""}`}
                >
                Login
                </li>
            </Link>
            <Link to="/create" >
                <li
                onClick={() => setActive("home")}
                className={`${active === "create" ? "active" : ""}`}
                >
                Create
                </li>
            </Link>
            <Link to="/about" >
                <li
                onClick={() => setActive("home")}
                className={`${active === "create" ? "active" : ""}`}
                >
                About
                </li>
            </Link>
        </ul>
    </header>
  )
}

export default Navbar